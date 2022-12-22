import React from 'react'
import Logo from '../../assets/LOGO.png'
import './navbar.styles.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <ul className="nav-items">
            <li className='nav-item'>Men</li>
            <li className='nav-item'>Women</li>
            <li className='nav-item'>Sale</li>
            <li className='nav-item'>Sneakers</li>
        </ul>
    </div>
  )
}

export default Navbar