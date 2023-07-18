import '../App.css'

import Header from "./Header"
import Footer from "./Footer"
import Nav from './Nav'
// import {Routes} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Subhome from '../component/Subhome'
import { appContext, useGlobalContext } from '../context'

const Layout=()=>{
    const {menu}=useGlobalContext(appContext)
    return(
        <>
        <Header/>
        
        <Nav/>
        <Outlet/>
        <Subhome/>
        <Footer/>
       
        </>
    )
}

export default Layout