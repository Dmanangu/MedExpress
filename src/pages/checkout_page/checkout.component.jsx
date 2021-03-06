import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Navigation } from "../../component/navigation/navigation.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.components.css";
import { cartItems } from "../../redux/cart/cart.actions";

export const CheckoutPage = ({ props, cartItems, total }) => {
  const medicine = useSelector((state) => state);
  console.log("products");
  console.log(medicine);
  console.log("products");

  return (
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
        {cartItems.map((props) => (
          <CheckoutPage key={props.id} cartItem={cartItems} />
        ))}
        <div className="total">TOTAL: ₱{total}</div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
