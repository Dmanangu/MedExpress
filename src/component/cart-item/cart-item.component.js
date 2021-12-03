import React from "react";

import "./cart-item.component.css";

const CartItem = ({ item: { img, price, title, quantity } }) => (
  <div className="cart-item">
    <img src={img} alt="item" />
    <div className="item-details">
      <span className="name">{title}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
