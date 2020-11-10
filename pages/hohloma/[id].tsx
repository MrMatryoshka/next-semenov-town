import {useState,useEffect} from 'react'
import {Layout} from "../../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";
import classes from "./../../styles/Hohloma.module.scss";
import {MyPost} from "../../interface/post";

interface PostPage {
    post:MyPost
}

export default function Post({post:serverPost}: PostPage) {

    const [post ,setPost] = useState(serverPost);
    const router = useRouter()

    useEffect( () => {
        async function load () {
            const response = await fetch(`http://localhost:4200/hohloma/${router.query.id}`);
            const data = await response.json()
            setPost(data)
        }
        if(!serverPost){
            load()
        }
    },[])

    if(!post) {
        return( <Layout>
                <h2> Loading ...</h2>
            </Layout>
        )} else{

        return (
            <Layout>
                <div className={classes.hohloma}>
                    <h1>{post.title}</h1>
                    <hr/>
                    <img src={post.imageUrl2} alt={'Хохлома'}/>
                    <p>{post.body}</p>

                    <Link href={'/hohloma/hohloma'}><a><button>Вернутся назад</button> </a></Link>
                </div>

            </Layout>
        )}
}



export  async  function getServerSideProps (context){

    const response = await fetch(`http://localhost:4200/hohloma/${context.query.id}`);
    const post: MyPost[] = await response.json()

    return {
        props:{post}
    }
}
