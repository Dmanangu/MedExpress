import React from "react";
import pdImg from "../../assets/images/bg_pd.jpg";
import { Navigation, SearchBar } from "../../component/export-components";
import "./prescription.component.css";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

export class PrescriptionPage extends React.Component {
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
      const arrList = convertCollectionsToList(collection, "B");
      this.setState({ dataList: arrList });
    });
  }

  render() {
    const { dataList } = this.state;
    return (
      <div className="pd-content">
        <Navigation />
        <div className="line-padding"></div>
        <div className="lines-padding"></div>
        <header className="header-pd">
          <img className="pd-image" src={pdImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pd-txt">PrescriptionPage Drugs</h1>
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
