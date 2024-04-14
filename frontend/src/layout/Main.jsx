import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
             <nav>Nav bar</nav>
             <Outlet></Outlet>
            <footer> footer</footer>
    </>
  )
}

export default Main