import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>

    )
}

export default Layout