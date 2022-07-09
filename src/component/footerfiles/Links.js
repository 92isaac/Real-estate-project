import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <nav>
        <label>Company</label>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/services'>services</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Links