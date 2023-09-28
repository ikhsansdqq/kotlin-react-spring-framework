"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export async function PostDetail() {
    const router = useRouter();
    const {slug} = router.query;
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/messages/api/${slug}`)
            .then((response) => response.json())
            .then((data) => setMessage(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data)
                }
            });
    }, [slug]);

    return (
        <div>
            {
                messages ? (
                    <div>
                        <h1>{messages.title}</h1>
                        <p>{messages.description}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
}

export default PostDetail()
