import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../controllers/Footer'

export class LogRegister extends Component {
  render() {
    return (
        <>
             <nav>Nav bar</nav>
             <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
  }
}

export default LogRegister