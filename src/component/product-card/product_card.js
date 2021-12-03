import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { addItems } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.grams}</p>
          <p className="card-title">{props.type}</p>
          <h5 className="card-title">₱{props.price}</h5>
          <button className="buy-btn" onClick={addItems(props.item)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
