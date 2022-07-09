import React from 'react'
import '../styles/footer.css'
import Logo from '../commonfiles/Logo'
import Legal from './Legal'
import Links from './Links'
import Support from './Support'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='list'>
            <Logo />
            <Links />
            <Support />
            <Legal />
        </div>
        <Socials />
    </div>
  )
}

export default Footer