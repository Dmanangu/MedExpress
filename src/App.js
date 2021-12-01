import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  CheckOut,
} from "./pages/export-pages";
class App extends React.Component {
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
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Login/Register" element={<Register />} />
            <Route path="/MyCart/OderSummary" element={<OrderSummary />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
