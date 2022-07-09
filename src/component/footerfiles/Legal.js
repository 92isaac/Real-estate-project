import React from 'react'
import { Link } from 'react-router-dom'


const Legal = () => {
  return (
    <nav>
        <label>Legal</label>
        <Link to='/'>Cookies policy</Link>
        <Link to='/about'>Intellectual Property Policy</Link>
        <Link to='/services'>Law Enforcement</Link>
        <Link to='/blog'>Privacy Policy</Link>
        <Link to='/login'>Terms and Condition</Link>
    </nav>
  )
}

export default Legal