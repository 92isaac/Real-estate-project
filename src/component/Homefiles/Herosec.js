import React from 'react'
import '../styles/Herosec.css'
import Heroimg from '../../images/4282515.png'

const Herosec = () => {
  return (
    <div className='hero-wrapper'>
        <img src={Heroimg} alt='' />
        <div className='herotext'>
            <q>There is a magic in that little world, home; it is a mystic circle that surrounds comforts and virtues never known beyond its hallowed limits.</q>
        </div>
    </div>
  )
}

export default Herosec