import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {FiMenu } from 'react-icons/fi';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle =()=>{setToggle(!toggle);}
  return (
    <nav className={toggle? 'navbar collaspe':'navbar'}>
      <h2 className='logo'>Housing<span>-Solution</span></h2>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle? <FaTimes/> : <FiMenu/>}
        </div>
        
      <ul className='links'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
   

    </nav>
  )
}

export default Navbar