import React from "react";
import Cart from "../../component/check-out-commands/cart.component";
import Navigation from "../../component/navigation/navigation.component";
import { CartProvider } from "react-use-cart";
export class MyCart extends React.Component {
  render() {
    return (
      <div className="export-container">
        <Navigation />
        <div>
          <CartProvider>
            <Cart />
          </CartProvider>
        </div>
      </div>
    );
  }
}

export default MyCart;
