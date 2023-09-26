import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Make an HTTP GET request to fetch messages from your Spring Boot backend
        fetch('http://localhost:8080') // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            });

    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-5xl font-bold">Testing Messages</h1>
            <p className="mt-4 text-gray-500">
                Below will be shown list of API made by Spring Framework
            </p>


            <div className="flex space-x-5">
                {messages.map((message) => (
                    <div
                        className="my-8 max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">

                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{message.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{message.description}</p>
                        <a href={message.id}
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
