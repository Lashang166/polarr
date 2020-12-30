import React from 'react'

function Paper({children}) {
    return (
        <div className="bg-white rounded-md p-4 flex shadow-md w-full mt-3">
            {children}
        </div>
    )
}

export default Paper
