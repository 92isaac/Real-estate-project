import React from 'react'
import img from '../../images/american-banking-buy-210617-removebg-preview.png'
import Button from '../commonfiles/Button'
import { useNavigate } from 'react-router-dom'



const Produc = ({img, details, price, location,roomNum, bathNum, id}) => {
    const navigate = useNavigate()
  return (
<div className="product" onClick={() => navigate('/products/' + id)}>
        <div>
          <img
            src={img}
            alt="placeholder"
          />
        </div>
        <div>
          <h4>{details}</h4>
          <h5>{price}</h5>
          <p>{location}</p>
        </div>
        <div className="bed-size">
          <div>{roomNum}</div>
          <div>{bathNum}</div>
        </div>
      </div>
  )
}

export default Produc