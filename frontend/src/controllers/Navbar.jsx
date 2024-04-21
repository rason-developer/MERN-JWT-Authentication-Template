import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">Rason</a>
      </div>
      <div className="navbar-end">
        <a href="/users/login" className="btn btn-ghost text-xl bg-green-400 hover:bg-green-700">Login</a>

      </div>
    </div>
    )
  }
}

export default Navbar