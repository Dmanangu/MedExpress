import React from "react";
import pcImg from "../../assets/images/bg_pc.jpg";
import { Navigation, SearchBar } from "../../component/export-components";

import "./personalcare.component.css";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

export class PersonalCarePage extends React.Component {
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
      const arrList = convertCollectionsToList(collection, "C");
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
        <header className="header-pc">
          <img className="pc-image" src={pcImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="pc-txt">PersonalCarePage Care</h1>
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

export default PersonalCarePage;
