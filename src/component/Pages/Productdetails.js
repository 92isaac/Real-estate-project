import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productlist from "../productfiles/product";
import Button from "../commonfiles/Button";
import '../styles/productdetails.css'
import Navbar from "../Navbarfiles/Navbar";
import Footer from "../footerfiles/Footer";

const Productdetails = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const listitems = productlist[id];
  return (
    <div className="product-details-container">
        <Navbar />
      <div className="card">
        <img src={listitems.img} />
        <div>
          <h4>{listitems.address}</h4>
          <h5>{listitems.price}</h5>
          <p>{listitems.location}</p>
        </div>
        <div className="bed-size">
          <div>{listitems.room}</div>
          <div>{listitems.bath}</div>
        </div>
        <p>{listitems.desc}</p>
      </div>
        <Button onClick={()=>{navigate(-1)}} className="" name="Back" />
        <Button  className="" name="Book Appointment" />
        <Footer />
    </div>
  );
};

export default Productdetails;
