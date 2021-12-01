import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.component';

export class OrderSummary extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Form>
					{[ 'checkbox' ].map((type) => (
						<div key={`inline-${type}`} className="mb-3">
							<Form.Check
								inline
								label="Order Summary"
								name="group1"
								type={type}
								id={`inline-${type}-1`}
								checked
							/>
							<Link to="/Address" exact>
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
export default OrderSummary;
