import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export class LogRegister extends Component {
  render() {
    return (
        <>
             <nav>Nav bar</nav>
             <Outlet></Outlet>
            <footer> footer</footer>
        </>
    )
  }
}

export default LogRegister