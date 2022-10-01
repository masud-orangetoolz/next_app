import React from 'react';
import Link from "next/link";

const Users = ({users}) => {

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map(user => (
                    <Link key={user.id} href={"/user" + "/" + user.id}>
                        <li>{user.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Users;

export async function getStaticProps() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => data);

        return {
            props: {
                users: data
            }
        }
    } catch (err) {
        console.log(err)
    }
}