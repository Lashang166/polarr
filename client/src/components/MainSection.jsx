import React from 'react'

function MainSection({ children }) {
    return (
        <div className="w-10/12 relative mx-auto container flex flex-wrap flex-col md:flex-nowrap/ md:flex-row ">
            { children }
        </div>
    )
}

export default MainSection
