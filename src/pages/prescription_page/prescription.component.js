import React from "react";
import pdImg from "../../assets/images/bg_pd.jpg";
import { Navigation, SearchBar } from "../../component/export-components";
import "./prescription.component.css";
import Card from "../../component/product-card/card.component";
import store from "../../redux/store";
export class PrescriptionPage extends React.Component {
  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("b");
    });
    return (
      <div className="pd-content">
        <Navigation />
        <header className="header-pd">
          <img className="pd-image" src={pdImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pd-txt">PrescriptionPage Drugs</h1>
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
