import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.component';

export class Address extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Form>
					{[ 'checkbox' ].map((type) => (
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
								<Form.Label>Complete Address</Form.Label>
								<Col xs={3}>
									<Form.Control type="text" />
								</Col>
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
