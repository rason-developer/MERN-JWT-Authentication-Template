import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../controllers/Footer'
import Navbar from '../controllers/Navbar'

const Main = () => {
  return (
    <>
             <Navbar/>
             <Outlet></Outlet>
            <Footer/>
  </>
  )
}

export default Main