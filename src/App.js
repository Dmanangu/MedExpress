import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "firebase/firestore";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./firebase/firebase.utils.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { OrderSummary } from "./component/export-components";
import {
  Login,
  Register,
  ProfilePage,
  AboutPage,
  ContactPage,
  OverTheCounterPage,
  PrescriptionPage,
  MedicalSuppliesPage,
  ProtectionAndHygienePage,
  PersonalCarePage,
  CovidEssentialPage,
  CheckoutPage,
} from "./pages/export-pages";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { requestRobots } from "./redux/request_data/request_data.action";
import { Provider } from "react-redux";
import store from "./redux/store";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);

      // const collectionRef = firestore.collection("medicine");

      // collectionRef.get().then((snapshot) => {
      //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      //   console.log(collectionsMap);
      // });

      this.props.onRequestRobots();
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { medicine } = this.props;
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    console.log(medicine);
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    return (
      <div>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<OverTheCounterPage />} />
            <Route
              path="/Login"
              element={<Login />}
              render={() =>
                this.props.currentUser ? <Navigate to="/" /> : <Login />
              }
            />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contacts" element={<ContactPage />} />

            <Route path="/Home" element={<OverTheCounterPage />} />

            <Route path="/OverTheCounter" element={<OverTheCounterPage />} />
            <Route path="/Prescription" element={<PrescriptionPage />} />
            <Route path="/MedicalSupplies" element={<MedicalSuppliesPage />} />
            <Route
              path="/ProtectionAndHygiene"
              element={<ProtectionAndHygienePage />}
            />
            <Route path="/PersonalCare" element={<PersonalCarePage />} />
            <Route path="/CovidEssential" element={<CovidEssentialPage />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/Login/Register" element={<Register />} />
            <Route path="/MyCart/OderSummary" element={<OrderSummary />} />
          </Routes>
        </Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
  return {
    medicine: state.requestRobots.medicine,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  onRequestRobots: () => dispatch(requestRobots()),
});

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.

export default connect(mapStateToProps, mapDispatchToProps)(App);
