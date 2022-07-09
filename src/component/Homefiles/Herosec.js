import React from 'react'
import '../styles/Herosec.css'
import Heroimg from '../../images/4282515.jpg'

const Herosec = () => {
  return (
    <div className='hero-wrapper'>
        <img src={Heroimg} alt='' />
        <div className='herotext'>
            <h3>Lorem ipsum</h3>
        </div>
    </div>
  )
}

export default Herosec