import React from "react";
import ceImg from "../../assets/images/bg_ce.png";
import { Navigation } from "../../component/export-components";

export class CovidEssentialPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-ce">
          <img className="ce-image" src={ceImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ce-txt"> Covid Essentials</h1>
        </header>
      </div>
    );
  }
}

export default CovidEssentialPage;
