import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

export class OrderSummary extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Order Summary"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                checked
              />
              <Row className="ordersummary-form-group">
                <Form.Label> Dropoff Location </Form.Label>
                <Col xs={3}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pickup Location"
                  />
                </Col>
                <Form.Label>Recipient Name </Form.Label>
                <Col xs={3}>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
                <Form.Label>Contact Number</Form.Label>
                <Col xs={3}>
                  <Form.Control type="tel" placeholder="09" />
                </Col>
              </Row>
              <Link to="/Home" exact>
                <div className="mb-2">
                  <Button variant="primary" size="lg">
                    Done
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
export default OrderSummary;
