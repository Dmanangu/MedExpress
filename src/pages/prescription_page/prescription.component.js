import React from "react";
import "./prescription.component.css";
import pdImg from "../../assets/images/bg_pd.PNG";
import { Navigation, SearchBar } from "../../component/export-components";

import store from "../../redux/store";
import { connect, Provider } from "react-redux";
import { Card } from "../../component/product-card/card.component";
//ACTIONS

import { requestRobots } from "../../redux/request_data/request_data.action";
import { setSearchField } from "../../redux/searchfield/search.action";

export class PrescriptionPage extends React.Component {
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
      return meds.category.toLowerCase().includes("b");
    });

    return (
      <Provider store={store}>
        <div className="otc-content">
          <Navigation />
          <header className="header-pd">
            <img className="pd-image" src={pdImg} alt="over" />
          </header>
          <div className="PDsearch-container">
            <div className="search">
              <input
                className="search-bar"
                type="search"
                //value={this.state.search}
                placeholder="Search Prescription Medicine Here"
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
      </Provider>
    );
  }
}

export default PrescriptionPage;
