import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../navigation/navigation.component";

export class Address extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Address"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                checked
              />
              <Row>
                <Form.Label> Full Name </Form.Label>
                <Col xs={3}>
                  <Form.Control type="text" />
                </Col>
                <Form.Label>Phone Number</Form.Label>
                <Col xs={3}>
                  <Form.Control type="tel" placeholder="+63" />
                </Col>
                <Form.Label>House Number</Form.Label>
                <Col xs={3}>
                  <Form.Control type="number" />
                </Col>
                <DropdownButton as={ButtonGroup} title="Address">
                  <Dropdown.Item eventKey="1">San roque</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Santo. Cristo</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Santa. Cruz</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Baybay</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Banaban</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Marungko</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Sulucan</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Niugan</Dropdown.Item>
                  <Dropdown.Item eventKey="9">Taboc,</Dropdown.Item>
                  <Dropdown.Item eventKey="10">Pulong yantok</Dropdown.Item>
                  <Dropdown.Item eventKey="11">Engkanto</Dropdown.Item>
                </DropdownButton>
              </Row>
              <Link to="/Payment">
                <div className="mb-2">
                  <Button variant="primary" size="lg">
                    Continue
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
export default Address;
