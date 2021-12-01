import React from "react";
import small_logo from "../../assets/images/app_logo_sm.png";
import user from "../../assets/images/user.png";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./navigation.component.css";

export class Navigation extends React.Component {
  render() {
    return (
      <div className="container-Navigation">
        <div className="TitleHeader">
          <div className="firstHeader">
            <div className="logoMain">
              <img src={small_logo} className="mainLogo" alt="logo" />
            </div>
            <div className="FDA"> Farmacia De Angat</div>
            <div className="fpartHeader">
              <Link to="/OverTheCounter">
                <button type="button" className="home-btn">
                  Home
                </button>
              </Link>
              <Link to="/About">
                <button type="button" className="about-btn">
                  About Us
                </button>
              </Link>
              <Link to="/Contacts">
                <button type="button" className="contact-btn">
                  Contact Us
                </button>
              </Link>
              <Link to="/CheckOut">
                <button type="button" className="checkOut-btn">
                  My Cart
                </button>
              </Link>
              <div className="user-dropdown">
                <div className="userIcon">
                  <img src={user} className="drop-btn" alt="icon" />
                </div>

                <div id="dropdown-btn" className="drop-content">
                  <Link to="/Profile">
                    <button type="button" className="profile-btn">
                      Profile
                    </button>
                  </Link>
                  <Link to="/Login">
                    <button type="button" className="logOut-btn">
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bars">
          <Link to="/OverTheCounter">
            <button type="button" className="otcm-btn">
              Over The Counter Medicine
            </button>
          </Link>
          <Link to="/Prescription">
            <button type="button" className="prescription-btn">
              Prescription
            </button>
            <Link to="/MedicalSupplies">
              <button type="button" className="medicalsupply-btn">
                Medical Supplies
              </button>
            </Link>
          </Link>
          <Link to="/ProtectionAndHygiene">
            <button type="button" className="pah-btn">
              Protection and Hygiene
            </button>
          </Link>
          <Link to="/PersonalCare">
            <button type="button" className="pc-btn">
              Personal Care
            </button>
          </Link>
          <Link to="/CovidEssential">
            <button type="button" className="ce-btn">
              Covid Essential
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
