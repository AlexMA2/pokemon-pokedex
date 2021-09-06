import React from 'react'
import Head from 'next/head'

const CustomLayout = ({children, className, title = "Remodelando", metadata = {author: "Alex", description: "Una pagina de mi app"}}) => {
    return (
        <div className={className}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="author" content={metadata.author} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            {children}
        </div>
    )
}

export default CustomLayout
