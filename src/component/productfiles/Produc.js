import React from 'react'
import img from '../../images/american-banking-buy-210617-removebg-preview.png'


const Produc = (props) => {
  return (
<div className="product">
        <div>
          <img
            src={props.img}
            alt="placeholder"
          />
        </div>
        <div>
          <h4>{props.details}</h4>
          <h5>{props.price}</h5>
          <p>{props.location}</p>
        </div>
        <div className="bed-size">
          <div>3 Bedroom</div>
          <div>2 Bathroom</div>
        </div>
      </div>
  )
}

export default Produc