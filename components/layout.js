import Head from "next/head";
import classes from './../styles/Loyuot.module.scss'
import React from "react";
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
                {children}
            </main>

        </div>
    )
}
