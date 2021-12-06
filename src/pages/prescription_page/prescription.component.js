import React from "react";
import pdImg from "../../assets/images/bg_pd.jpg";
import { Navigation } from "../../component/export-components";

import "./prescription.component.css";

export class PrescriptionPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-pd">
          <img className="pd-image" src={pdImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pd-txt">PrescriptionPage Drugs</h1>
        </header>
      </div>
    );
  }
}
