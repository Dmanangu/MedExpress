import React from "react";
import pahImg from "../../assets/images/bg_pah.jpg";
import { Navigation, SearchBar } from "../../component/export-components";

import "./protectionandhygiene.component.css";
import Card from "../../component/product-card/card.component";
import store from "../../redux/store";
export class ProtectionAndHygienePage extends React.Component {
  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("e");
    });
    return (
      <div className="pah-content">
        <Navigation />
        <header className="header-pah">
          <img className="pah-image" src={pahImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pah-txt">Protection and Hygiene</h1>
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

export default ProtectionAndHygienePage;
