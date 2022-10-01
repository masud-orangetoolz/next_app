import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import AppLayout from "../common/components/Layout/AppLayout";

const Post = () => {
    return (
        <AppLayout>
            <div>
                <Head>
                    <title>My First Post</title>
                    <link rel={"icon"} href={"/vercel.svg"}/>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <h1>My First post in Next.js page</h1>
                <Image
                    src={"/next/profile.png"}
                    height={200}
                    width={200}
                />
                <h2>
                    <Link href={"/"}>
                        <a> back to Home Page</a>
                    </Link>
                </h2>
            </div>
        </AppLayout>
    );
};

export default Post;
