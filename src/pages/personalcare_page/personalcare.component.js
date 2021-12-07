import React from "react";
import pcImg from "../../assets/images/bg_pc.jpg";
import { Navigation, SearchBar } from "../../component/export-components";

import "./personalcare.component.css";

import Card from "../../component/product-card/card.component";
import store from "../../redux/store";

export class PersonalCarePage extends React.Component {
  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("c");
    });
    return (
      <div className="pc-content">
        <Navigation />
        <header className="header-pc">
          <img className="pc-image" src={pcImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pc-txt">Personal Care</h1>
        </header>
        <div className="search-container">
          <SearchBar />
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

export default PersonalCarePage;
