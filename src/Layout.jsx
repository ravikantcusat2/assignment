import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'
import Card from './Component/Card/Card'
import CardDetails from './Component/Card/CardDetails'

function Layout() {
    return (
        <>
        <Header/>
        
        <Outlet />
       

        </>
    )
}

export default Layout
