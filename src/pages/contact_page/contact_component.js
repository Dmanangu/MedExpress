import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/app_logo.png";
import "./contact_component.css";
export class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <div className="headerAboutUs-container">
          <Link to="/OverTheCounter">
            <button className="backToHome-btn">Back To Home</button>
          </Link>
          <img className="bigLogo-container" src={logoImg} alt="" />
        </div>
        <header className="contactUs-header">
          <h1 className="contactUs-txt">Contact Us</h1>
        </header>
        <div className="contactUs-container">
          <body className="contactUs-body">
            <h2>
              Maynard L. Casimiro BSIT - 4C maynard.casimiropogi@gmail.com
            </h2>
            <h2>Angelo Glenn V. Tigas BSIT 4C angeloglenn63@gmail.com</h2>
            <h2>Bren Jei L.Simbulan BSIT-4C simbulanbrenjei0@gmail.com</h2>
            <h2> Marian M. de Castro BSIT-4C decastromarian59@gmail.com</h2>
          </body>
        </div>
      </div>
    );
  }
}

export default ContactPage;
