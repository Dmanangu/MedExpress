import React from "react";
import ceImg from "../../assets/images/bg_ce.png";
import { Navigation, SearchBar } from "../../component/export-components";
import "./covidessential.component.css";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

export class CovidEssentialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }
  componentDidMount() {
    const collectionRef = firestore.collection("medicine");
    collectionRef.get().then((snapshot) => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      const arrList = convertCollectionsToList(collection, "D");
      this.setState({ dataList: arrList });
    });
  }

  render() {
    const { dataList } = this.state;
    return (
      <div className="ce-content">
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-ce">
          <img className="ce-image" src={ceImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ce-txt"> Covid Essentials</h1>
        </header>
        <div className="search-container">
          <SearchBar />
        </div>

        <div className="contain-card">
          {dataList.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CovidEssentialPage;
