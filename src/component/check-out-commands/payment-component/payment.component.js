import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../navigation/navigation.component";

export class Payment extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Payment"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                checked
              />
              <Row className="payment-check-out">
                <Form.Label> Payment Method </Form.Label>
                <button className="gcash-btn">Gcash</button>
                <button className="cod-btn">Cash on Delivery</button>
              </Row>
              <Link to="/OverTheCounter" exact>
                <div className="mb-2">
                  <Button variant="primary" size="lg">
                    Proceed Payment
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </Form>
      </div>
    );
  }
}
export default Payment;
