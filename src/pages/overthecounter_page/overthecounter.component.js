import React from "react";
import overImg from "../../assets/images/bg_over.png";
import { Navigation } from "../../component/export-components";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import "./overthecounter.component.css";

export class OverTheCounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    };
  }

  componentDidMount() {
    const collectionRef = firestore.collection("medicine");
    collectionRef.get().then((snapshot) => {
      const temp = convertCollectionsSnapshotToMap(snapshot);
      this.setState({ collection: temp });
      // console.log(temp);
    });
  }

  render() {
    const filter = [];

    const { collection } = this.state;
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
        prodName: prodName, price: price, strength: strength, genName: genName,
        category: category, packageType: packageType, imageUrl: imageUrl,
        {collection.map(
          ({
            id,
            medID,
            prodName,
            price,
            strength,
            genName,
            category,
            packageType,
            imageUrl,
          }) => (
            <div>
              {medID}
              <img src={imageUrl} alt="" />
            </div>
          )
        )}
        );
      </div>
    );
  }
}

export default OverTheCounterPage;
