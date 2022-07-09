import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <nav>
        <label>Surport</label>
        <Link to='/help'>Help center</Link>
        <Link to='/safety'>safety center</Link>
        <Link to='/community'>community Guidelines</Link>
        <Link to='/transparency'>Transparency</Link>
    </nav>
  )
}

export default Support