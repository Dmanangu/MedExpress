import React from "react";
import msImg from "../../assets/images/bg_ms.jpg";
import { Navigation, SearchBar } from "../../component/export-components";

import "./medicalsupplies.component.css";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

export class MedicalSuppliesPage extends React.Component {
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
      const arrList = convertCollectionsToList(collection, "F");
      this.setState({ dataList: arrList });
    });
  }

  render() {
    const { dataList } = this.state;
    return (
      <div className="ms-content">
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-ms">
          <img className="ms-image" src={msImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="ms-txt">Medical Supplies</h1>
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

export default MedicalSuppliesPage;
