import React from "react";
import "./overthecounter.component.css";
import overImg from "../../assets/images/bg_over.png";
import { Navigation, SearchBar } from "../../component/export-components";
import Card from "../../component/product-card/card.component";

import { setSearchField } from "../../redux/searchfield/search.action";
import { requestRobots } from "../../redux/request_data/request_data.action";

import store from "../../redux/store";
import { connect } from "react-redux";

export class OverTheCounterPage extends React.Component {
  render() {
    //replicate
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("a");
    });
    //replicate
    console.log("FILTERRRRRRRRRRRRRRRRRR");
    console.log(filteredMedicine);
    console.log("FILTERRRRRRRRRRRRRRRRRR");

    return (
      <div className="otc-content">
        <Navigation />
        <header className="header-otc">
          <img className="otc-image" src={overImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="otc-txt">Over The Counter</h1>
        </header>
        <div className="search-container">
          {/* <SearchBar /> */}
          <SearchBar searchChange={this.props.onSearchChange} />
        </div>
        <div className="contain-card">
          {filteredMedicine.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapDispatchToProps)(OverTheCounterPage);
