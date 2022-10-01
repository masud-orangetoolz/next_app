import Head from "next/head";
import React from "react";
import SocialPostHeader from "../common/components/SocialPost/SocialPostHeader";


const profile = ({user}) => {
    const {name} = user || {};

    return (
        <div>
            <SocialPostHeader user={user} />
            <p>Name: {name || "Unknown"}</p>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(req, res) {
    // Fetch data from external API

    const {id = 1} = req.query;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    // Pass data to the page via props
    return { props: { user: data } }
}

export default profile;

