import React from "react";
import overImg from "../../assets/images/bg_over.png";
import { Navigation } from "../../component/export-components";
import "../../component/navigation/navigation.component.css";

import "./overthecounter.component.css";

export const OverTheCounterPage = () => {
  return (
    <div>
      <Navigation />
      <div className="line-padding"></div>
      <div className="lines-padding"></div>
      <header className="header-otc">
        <img className="otc-image" src={overImg} alt="over" />
        <div className="txt-padding"></div>
        <h1 className="otc-txt">Over The Counter</h1>
      </header>

      <div>
        <section className="py-4 container">
          <div className="row justify-content-center"></div>
        </section>
      </div>

      <div>
        <section className="py-4 container">
          <div className="row justify-content-center"></div>
        </section>
      </div>
    </div>
  );
};

export default OverTheCounterPage;
