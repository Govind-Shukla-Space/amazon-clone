import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="Navbar">
        <div className="Navbar__logo">
          <img src= "resources\amazon_logo.png" alt="amazon_logo"/>
        </div>
        <div className="Navbar__options">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/customercare">CustomerCare</a>
          <h1>Cart </h1>
        </div>
    </div>
  )
}

export default NavBar