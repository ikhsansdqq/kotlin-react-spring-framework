import './globals.css'
import React from "react";

import Navbar from "../Components/Navbar";

export const metadata = {
    title: 'Kotlin Spring Framework',
    description: 'A test for my simple project.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
        </head>
        <body className="container mx-auto max-w-screen-2xl dark:bg-gray-900 px-5">
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
