import React from "react";
import pahImg from "../../assets/images/bg_pah.jpg";
import { Navigation } from "../../component/export-components";

import "./protectionandhygiene.component.css";

export class ProtectionAndHygienePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-pah">
          <img className="pah-image" src={pahImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pah-txt">Protection and Hygiene</h1>
        </header>
      </div>
    );
  }
}

export default ProtectionAndHygienePage;
