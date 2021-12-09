import React from "react";
import pcImg from "../../assets/images/bg_pc.PNG";

import "./personalcare.component.css";
import store from "../../redux/store";
import { Navigation } from "../../component/export-components";
import { Card } from "../../component/product-card/card.component";
export class PersonalCarePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      medicineList: [],
    };
  }

  handleChange = (e, ownProps) => {
    this.setState(
      {
        ...this.state,
        search: e.target.value,
      },
      () => {
        if (this.state.search && this.state.search.length >= 1) {
          this.getResults(ownProps);
        }
      }
    );
  };

  getResults = (ownProps) => {
    //console.log(this.state.medicineList.map((e) => console.log(e)));
    console.log("ORIGGGGGGGGGGGGGGGGG");
    console.log(ownProps);
    console.log("ORIGGGGGGGGGGGGGGGGG");
    const filteredMedicine = ownProps.filter((meds) => {
      return meds.prodName
        .toLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });
    console.log("FILETERRRR");
    console.log(filteredMedicine);
    console.log("FILETERRRR");
    this.setState({
      ...this.state,
      medicineList: filteredMedicine,
    });
  };

  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const medsByCategory = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("c");
    });

    return (
      <div className="otc-content">
        <Navigation />
        <header className="header-pc">
          <img className="pc-image" src={pcImg} alt="over" />
        </header>
        <div className="search-container">
          <div className="search">
            <input
              className="search-bar"
              type="search"
              //value={this.state.search}
              placeholder="Search Personal Care Medicine Here"
              onChange={(e) => this.handleChange(e, medsByCategory)}
            />
          </div>
        </div>
        <div className="contain-card">
          {this.state.medicineList.length === 0 && this.state.search === ""
            ? medsByCategory.map((item) => <Card key={item.id} data={item} />)
            : this.state.medicineList.map((item) => (
                <Card key={item.id} data={item} />
              ))}
        </div>
      </div>
    );
  }
}

export default PersonalCarePage;
