import React from "react";
import pcImg from "../../assets/images/bg_pc.jpg";
import { Navigation } from "../../component/export-components";

import "./personalcare.component.css";

export class PersonalCarePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-pc">
          <img className="pc-image" src={pcImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pc-txt">PersonalCarePage Care</h1>
        </header>
      </div>
    );
  }
}

export default PersonalCarePage;
