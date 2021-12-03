import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<OverTheCounterPage />} />
            <Route path="/Login" element={<Login />} />
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
        </Router>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
