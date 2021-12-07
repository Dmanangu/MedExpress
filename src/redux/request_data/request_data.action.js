import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./request_data.types";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils.js";
const collectionRef = firestore.collection("medicine");

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  collectionRef
    .get()
    .then((data) => {
      const newData = convertCollectionsSnapshotToMap(data);

      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: newData });
    })
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};

// collectionRef.get().then((snapshot) => {
//   console.log("snapshot - aaaaaaaaaaaaaaaaaaaaaa");
//   console.log(snapshot);
//   console.log("snapshot - aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   const collection = convertCollectionsSnapshotToMap(snapshot);
//   const arrList = convertCollectionsToList(collection, "A");
//   this.setState({ dataList: arrList });
// });
