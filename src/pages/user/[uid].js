import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const User = () => {
    const router = useRouter();
    const {uid} = router.query;
    const [user, setUser] = useState({});

    useEffect(() => {
        if(uid) {
            fetch("https://jsonplaceholder.typicode.com/users" + `/${uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setUser(data)
                });
        }

    }, [uid])

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User;

