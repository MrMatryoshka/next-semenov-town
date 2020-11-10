import Head from "next/head";
import classes from './../styles/Loyuot.module.scss'
import React from "react";
import Link from "next/link";
export function Layout({children, title='Next App'}) {
    return (
        <div className={classes.container}>
            <Head>
                <title>{title}</title>
                <link rel={'icon'} href={'./../static/favicon/favicon.ico'}/>
                <meta name="keywords" content="next,javascript,html,css,sass,react app" />
                <meta name="description" content=" first program with next.js - react app" />

            </Head>

            <main className={classes.main}>
                <nav>
                    <Link href={'/'}>
                        <a>Home</a>
                    </Link>
                </nav>
                {children}
            </main>
            <style jsx>
                {
                    `
                    nav{
                    position:fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right:0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    
                    }
                    
                    nav a {
                    color : #fff;
                    text-decoration:none;
                    }
                    main{
                    margin-top: 60px;
                    padding: 1rem;
                    }
                 
                    `
                }
            </style>

        </div>
    )
}
