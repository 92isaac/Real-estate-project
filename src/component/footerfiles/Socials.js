import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Year from '../commonfiles/Year'

const Socials = () => {
  return (
    <div className="social">
        <select>
            <option value="English" selected>English</option>
            <option value="French" >French</option>
            <option value="Spanish" >Spanish</option>
            <option value="Dutch" >Dutch</option>
        </select>
        <div>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
        </div>
        <h4>Copyright <Year/></h4>
    </div>
  )
}

export default Socials