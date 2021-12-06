import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "./card.component.css";

export const Card = (props) => {
  const { addItems } = useCart();

  const id = props.data[0];
  const medID = props.data[1];
  const prodName = props.data[2];
  const price = props.data[3];
  const strength = props.data[4];
  const genName = props.data[5];
  const category = props.data[6];
  const packageType = props.data[7];
  const imageUrl = props.data[8];

  return (
    <Container className="card-container">
      <div className="product-card-container">
        <div className="card">
          <img src={imageUrl} className="card-img" alt="" />

          <div className="card-body">
            <h5 className="card-prodname">{prodName}</h5>
            <h5 className="card-genname">{genName}</h5>

            <h5 className="card-price">₱{price}</h5>
            <div className="btns">
              <button className="buy-btn">Buy </button>
              <button className="add-btn">Add </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
