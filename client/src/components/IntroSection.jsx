import React from 'react'

function IntroSection({ children }) {
    return (
        <section className="flex h-32 bg-gray-200 w-full min-w-full items-center justify-center">
            <h1 className="text-4xl font-thin uppercase">
                { children }
            </h1> 
        </section>
    )
}

export default IntroSection
