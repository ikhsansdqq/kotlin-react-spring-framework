// components/PostForm.js

"use client";

import React, {useState} from 'react';
import Link from "next/link";

function PostForm() {
    const [formData, setFormData] = useState({title: '', description: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Post saved successfully');
                setFormData({title: '', description: ''});
            } else {
                console.error('Failed to save post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit}>

                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    email</label>
                <input type="text" id="name" aria-describedby="helper-text-explanation" value={formData.title}
                       onChange={handleChange} required={true}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Title"/>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll
                    never share your details. Read our <a href="#"
                                                          className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy
                        Policy</a>.</p>

                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea rows="4" value={formData.description} onChange={handleChange} name="description"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Leave a description..."></textarea>

                <button type="submit" className="btn">Save</button>
            </form>


            <form>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        password</label>
                    <input type="password" id="password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                               required/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                        me</label>
                </div>

                <div className="flex space-x-2">
                    <button type="submit"
                            className="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                    <button type="button"
                            className="py-2.5 px-5 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <Link href="/">Back to main</Link>
                    </button>
                </div>
            </form>

        </div>
    );
}

export default PostForm;
