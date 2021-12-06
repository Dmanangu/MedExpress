import React from "react";
import pahImg from "../../assets/images/bg_pah.jpg";
import { Navigation, SearchBar } from "../../component/export-components";

import "./protectionandhygiene.component.css";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

export class ProtectionAndHygienePage extends React.Component {
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
      const arrList = convertCollectionsToList(collection, "E");
      this.setState({ dataList: arrList });
    });
  }

  render() {
    const { dataList } = this.state;
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

export default ProtectionAndHygienePage;
