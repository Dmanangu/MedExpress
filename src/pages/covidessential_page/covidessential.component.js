import React from "react";
import ceImg from "../../assets/images/bg_ce.png";
import { Navigation, SearchBar } from "../../component/export-components";
import "./covidessential.component.css";
import Card from "../../component/product-card/card.component";
import store from "../../redux/store";
export class CovidEssentialPage extends React.Component {
  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("d");
    });
    return (
      <div className="ce-content">
        <Navigation />
        <header className="header-ce">
          <img className="ce-image" src={ceImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ce-txt"> Covid Essentials</h1>
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

export default CovidEssentialPage;
