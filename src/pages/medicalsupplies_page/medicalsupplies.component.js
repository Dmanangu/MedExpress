import React from "react";
import msImg from "../../assets/images/bg_ms.jpg";
import { Navigation, SearchBar } from "../../component/export-components";
import "./medicalsupplies.component.css";
import Card from "../../component/product-card/card.component";
import store from "../../redux/store";
export class MedicalSuppliesPage extends React.Component {
  render() {
    const state = store.getState();
    const medicine = state.requestRobots.medicine;
    const filteredMedicine = medicine.filter((meds) => {
      return meds.category.toLowerCase().includes("f");
    });
    return (
      <div className="ms-content">
        <Navigation />
        <header className="header-ms">
          <img className="ms-image" src={msImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ms-txt">Medical Supplies</h1>
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

export default MedicalSuppliesPage;
