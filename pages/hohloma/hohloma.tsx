import {useState,useEffect} from 'react';
import {Layout} from "../../components/layout";
import classes from "./../../styles/Hohloma.module.scss";
import Link from "next/link";
import {MyPost} from "../../interface/post";

interface PostPage {
    posts:MyPost[]
}

export default function Hohloma ({posts:serverPosts}: PostPage){
    const [posts, setPosts] = useState(serverPosts)
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/hohloma`);
            const data = await response.json()
            setPosts(data)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    return (
        <Layout title={'Hohloma'}>
                <div >
                    {posts.map(post => (
                        <div key={post.id} className={classes.hohloma}>
                            <Link href={`/hohloma/[id]`} as={`/hohloma/${post.id}`}>
                                <a>{post.title} &rarr;</a>

                            </Link>
                            <img src={post.imageUrl1} alt={post.alt}/>
                        </div>
                    ))}
                </div>
        </Layout>
    )
}

export  async  function getServerSideProps (context) {
    if(!context.req){
        return {posts:null}
    }
    const response = await fetch(`http://localhost:4200/hohloma`);
    const posts : MyPost[] = await response.json()

    return {
        props:{posts}
    }
}

