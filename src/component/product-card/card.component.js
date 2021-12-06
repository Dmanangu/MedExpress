import React from "react";
import { useCart } from "react-use-cart";

export const Card = (props) => {
  const { addItems } = useCart();

  return (
    <div className="product-card-container">
      <div className="card">
        <img src={props.imageUrl} className="card-img" alt="" />
        <div className="card-body">
          <h5 className="card-name">{props.prodName}</h5>
          <p className="card-genName">{props.genName}</p>
          <h5 className="card-price">₱{props.price}</h5>
          <button className="buy-btn" onClick={addItems(props.item)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
