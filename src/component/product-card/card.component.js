import React from "react";
import { Container } from "react-bootstrap";
// import { useCart } from "react-use-cart";
import { connect } from "react-redux";
import "./card.component.css";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/cart.actions";

export const Card = (props, addItem) => {
  return (
    <Container className="card-container">
      <div className="product-card-container">
        <div className="card">
          <img
            className="card-img"
            src={props.data.imageUrl}
            alt="cannot display"
          />

          <div className="card-body">
            <h5 className="card-prodname">{props.data.prodName}</h5>
            <h5 className="card-genname">{props.data.genName}</h5>

            <h5 className="card-price">₱{props.data.price}</h5>
            <div className="btns">
              <Link to="/CheckoutPage">
                <button className="buy-btn" onClick={() => addItem(props)}>
                  Buy
                </button>
              </Link>
              <button className="add-btn" onClick={() => addItem(props)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (props) => dispatch(addItem(props)),
});
export default connect(null, mapDispatchToProps)(Card);
