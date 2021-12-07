import React from "react";
import overImg from "../../assets/images/bg_over.png";
import { Navigation, SearchBar } from "../../component/export-components";
import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsToList,
} from "../../firebase/firebase.utils.js";
import Card from "../../component/product-card/card.component";

import "./overthecounter.component.css";
import { setSearchField } from "../../redux/searchfield/search.action";
import { connect } from "react-redux";

const maptStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

export class OverTheCounterPage extends React.Component {
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
      const arrList = convertCollectionsToList(collection, "A");
      this.setState({ dataList: arrList });
    });
  }
  render() {
    const { dataList } = this.state;
    return (
      <div className="otc-content">
        <Navigation />

        <header className="header-otc">
          <img className="otc-image" src={overImg} alt="over" />
          <div className="txt-padding"></div>
          <h1 className="otc-txt">Over The Counter</h1>
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

export default connect(
  maptStateToProps,
  mapDispatchToProps
)(OverTheCounterPage);
