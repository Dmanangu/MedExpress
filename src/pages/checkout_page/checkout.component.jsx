import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Navigation } from "../../component/navigation/navigation.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.components.css";

export const CheckoutPage = ({ props, cartItem, total }) => (
  <div>
    <Navigation />
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {/* {cartItem.map((cartItem) => (
        <CheckoutItem key={props.data.id} cartItem={cartItem} />
      ))} */}
      <div className="total">TOTAL: ₱{total}</div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
