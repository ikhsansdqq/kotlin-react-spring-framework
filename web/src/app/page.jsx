"use client";

import {useEffect, useState} from "react";

export default function Home() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/messages/api/')
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data)
                }
            });
    }, []);

    return (
        <div className="container mx-auto py-8 lg:container">
            <h1 className="text-5xl font-bold dark:text-white">Testing Messages</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
                Below will be shown a list of API calls made by Spring Framework
            </p>

            <button type="button"
                    className="py-2.5 px-5 mt-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <a href="./post/">Create Post</a>
            </button>

            <div className="">
                {messages.map((message) => (
                    <div
                        key={message.id} // Add a unique key prop for each item
                        className="my-5 mr-8 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {message.title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {message.description}
                        </p>
                        <a
                            href={`http://localhost:8080/post/${message.id}`}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
