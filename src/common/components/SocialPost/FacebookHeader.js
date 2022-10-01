import Head from "next/head";

const FacebookHeader = ({user}) => {
    const {name} = user;

    return (
        <Head>
            <title>{name}</title>
            <link rel={"icon"} href={"https://avatars.githubusercontent.com/u/90082963?v=4"}/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={name} />
            <meta property="og:type" content="video.movie" />
            <meta property="og:url" content="https://avatars.githubusercontent.com/u/90082963?v=4" />
            <meta property="og:image" content="https://avatars.githubusercontent.com/u/90082963?v=4" />
        </Head>

    );
};

export default FacebookHeader;