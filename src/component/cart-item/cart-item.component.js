import React from "react";

import "./cart-item.component.css";

const CartItem = ({ item: { imageUrl, price, prodName, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{prodName}</span>
      <span className="price">
        {quantity} x ₱{price}
      </span>
    </div>
  </div>
);

export default CartItem;
