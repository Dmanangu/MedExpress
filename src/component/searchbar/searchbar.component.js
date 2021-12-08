import React from "react";
import "./searchbar.component.css";
export class SearchBar extends React.Component {
  render() {
    const { medicine, searchField } = this.state;
    const filteredMedicine = medicine.filter((medicine) =>
      medicine.prodName.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="search">
        <input
          className="search-bar"
          type="search"
          placeholder="Search Medicine"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
      </div>
    );
  }
}
export default SearchBar;
