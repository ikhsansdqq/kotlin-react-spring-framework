"use client"

import {useEffect, useState} from "react";

export default function PostDetail() {
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/messages/api/6512bfbacc81c91ea2d28e49')
            .then((response) => response.json())
            .then((data) => setMessage(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data)
                }
            });
    }, []);

    if (!messages) {
        return <div><p className="dark:text-white">Loading...</p></div>;
    }

    return (
        <div>
            {
                messages.map((message) => (
                    <div>
                        <h1>{message.title}</h1>
                        <p>{message.description}</p>
                    </div>
                ))
            }
        </div>
    );
}
