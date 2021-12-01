import React from "react";
import msImg from "../../assets/images/bg_ms.jpg";
import { Navigation } from "../../component/export-components";

export class MedicalSuppliesPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-ms">
          <img className="ms-image" src={msImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ms-txt">Medical Supplies</h1>
        </header>
      </div>
    );
  }
}

export default MedicalSuppliesPage;
