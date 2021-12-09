import React from 'react';
import './overthecounter.component.css';
import overImg from '../../assets/images/bg_over.png';
import { Navigation } from '../../component/export-components';

import store from '../../redux/store';
import { connect, Provider } from 'react-redux';
import { Card } from '../../component/product-card/card.component';
//ACTIONS
import { requestRobots } from '../../redux/request_data/request_data.action';
import { setSearchField } from '../../redux/searchfield/search.action';

export class OverTheCounterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			results: [],
			medicineList: []
		};
	}

	handleChange = (e, ownProps) => {
		this.setState(
			{
				...this.state,
				search: e.target.value
			},
			() => {
				if (this.state.search && this.state.search.length >= 1) {
					this.getResults(ownProps);
				}
			}
		);
	};

	getResults = (ownProps) => {
		console.log('ORIGGGGGGGGGGGGGGGGG');
		console.log(ownProps);
		console.log('ORIGGGGGGGGGGGGGGGGG');
		const filteredMedicine = ownProps.filter((meds) => {
			return meds.prodName.toLowerCase().includes(this.state.search.toLocaleLowerCase());
		});
		console.log('FILETERRRR');
		console.log(filteredMedicine);
		console.log('FILETERRRR');
		this.setState({
			...this.state,
			medicineList: filteredMedicine
		});
	};

	render() {
		const state = store.getState();
		const medicine = state.requestRobots.medicine;
		const medsByCategory = medicine.filter((meds) => {
			return meds.category.toLowerCase().includes('a');
		});

		return (
			<Provider store={store}>
				<div className="otc-content">
					<Navigation />
					<header className="header-otc">
						<img className="otc-image" src={overImg} alt="over" />
						<div className="txt-padding" />
						<h1 className="otc-txt">Over The Counter</h1>
					</header>
					<div className="search-container">
						<div className="search">
							<input
								className="search-bar"
								type="search"
								//value={this.state.search}
								placeholder="Search Medicine"
								onChange={(e) => this.handleChange(e, medsByCategory)}
							/>
						</div>
					</div>
					<div className="contain-card">
						{this.state.medicineList.length === 0 && this.state.search === '' ? (
							medsByCategory.map((item) => <Card key={item.id} data={item} />)
						) : (
							this.state.medicineList.map((item) => <Card key={item.id} data={item} />)
						)}
					</div>
				</div>
			</Provider>
		);
	}
}
// this.state.medicineList 97

// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

// export default OverTheCounterPage;

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(null, mapDispatchToProps)(OverTheCounterPage);
