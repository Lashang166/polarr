import React,{ useContext } from 'react'
import Header from "../components/Header";
import { AuthContext } from '../context/AuthContext';

function DashboardAdmin() {
    const { user } = useContext(AuthContext)
    return (
        <>
        <Header />
            admin
        </>
    )
}

export default DashboardAdmin
