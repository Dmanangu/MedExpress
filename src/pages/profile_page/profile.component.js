import React from "react";
import { Navigation } from "../../component/export-components";
import "./profile.component.css";
import logoImg from "../../assets/images/app_logo.png";
export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="profile-container">
          <h1 className="profile-text"> User Profile</h1>
        </div>
        <div className="userProfile-container">
          <div></div>
          <img className="userIcon" src={logoImg} alt="" />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
