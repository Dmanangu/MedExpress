import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./card.component.css";
// import assetImage from "../../assets/images/1.jpg";
export const Card = (props) => {
  // const name = "1";
  // console.log("IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
  // console.log(props.data.medID);
  // console.log(`../../assets/images/${props.data.medID}.jpg`);
  // console.log("IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
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
              <button className="buy-btn" onClick={() => addItem(props)}>
                Buy
              </button>
              <button className="add-btn">Add </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(Card);
