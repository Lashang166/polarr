import React,{useContext, useEffect} from 'react'
import { MainContext } from "../context/MainContext"

function Toast({childern}) {

    const { toast, taostDispatch } = useContext(MainContext);

    useEffect(() => {
        setTimeout(() => {taostDispatch({ type: "ALERT_CLOSE" })}, 3500)
    },[toast])

    return (
        <div 
        className={`${toast.open ? "visible " : "hidden "} transition-opacity m-w-60 mx-auto text-white bg-black rounded-sm fixed p-1 px-2 -ml-14 text-center left-2/4 z-50 bottom-16 `}>
            {toast.msg}
        </div>
    )
}

export default Toast
