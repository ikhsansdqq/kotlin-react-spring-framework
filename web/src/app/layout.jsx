import './globals.css'
import React from "react";

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
        <body className="dark:bg-gray-900">{children}</body>
        </html>
    )
}
