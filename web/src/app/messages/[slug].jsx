"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function PostDetail() {
    const router = useRouter();
    const {id} = router;
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && id) {
            fetch(`/messages/api/${id}`)
                .then((response) => response.json())
                .then((data) => setPost(data))
                .catch((error) => console.error("Error fetching post:", error));
        }
    }, [id]);

    if (!post) {
        return <div><p className="dark:text-white">Loading...</p></div>;
    }

    return (
        <div>
            <h1>{post.title} WHAT</h1>
            <p>{post.description}</p>
        </div>
    );
}
