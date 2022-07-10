import React from "react";
import img from "../../images/american-banking-buy-210617-removebg-preview.png";
import "../styles/Product.css";
import productlist from "./product";
import Produc from "../productfiles/Produc";
import Button from "../commonfiles/Button";

const ProductDis = () => {
  return (
    <div className="pro">
      <div className="search-box">
        <input type="text" />
        <Button className="" name="Search" />
      </div>
      <div className="product-container">
        {productlist.map((house, idx) => {
          return (
            <Produc
              id={idx}
              key={idx}
              img={img}
              details={house.address}
              price={house.price}
              location={house.location}
              roomNum={house.room}
              bathNum={house.bath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDis;
