import React from 'react';

export class SearchBar extends React.Component {
	render() {
		// const { medicine, searchField } = this.state;
		// const filteredMedicine = medicine.filter((medicine) =>
		// 	medicine.name.toLowerCase().includes(searchField.toLowerCase())
		// );
		return (
			<div className="search">
				<input
					type="search"
					placeholder="Search Medicine"
					onChange={(e) => this.setState({ searchField: e.target.value })}
				/>
			</div>
		);
	}
}
export default SearchBar;
