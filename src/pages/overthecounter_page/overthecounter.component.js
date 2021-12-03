import React from "react";
import overImg from "../../assets/images/bg_over.png";
import { Navigation } from "../../component/export-components";
import "../../component/navigation/navigation.component.css";
<<<<<<< HEAD
import "./overthecounter.component.css";

export const OverTheCounterPage = () => {
=======
import { ProductCard } from "../../component/export-components";
import data from "../../component/product-card/data.component";

export const OverTheCounterPage = () => {
  console.warn(data.productData);
>>>>>>> 57ffbad5611a8202ce5ec4cd0a4e4c5f58ae0b97
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
<<<<<<< HEAD
=======
      <div>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {data.productData.map((item, index) => {
              return (
                <ProductCard
                  img={item.img}
                  title={item.title}
                  grams={item.grams}
                  mtype={item.mtype}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
>>>>>>> 57ffbad5611a8202ce5ec4cd0a4e4c5f58ae0b97
    </div>
  );
};

export default OverTheCounterPage;
