import React from "react";
import "./about_page.component.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/app_logo.png"; //
export class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="headerAboutUs-container">
          <Link to="/OverTheCounter">
            <button className="backToHome-btn">Back To Home</button>
          </Link>
          <img className="bigLogo-container" src={logoImg} alt="" />
        </div>
        <header className="about-us">
          <h2>About Us</h2>
        </header>

        <div className="aboutPageBody-container">
          <body className="body-about">
            Farmacia De Angat was made with the students from Bulacan State
            University Bustos Bulacan. The project was created to help the
            citizens of Bustos Bulacan to get buy their local medicine without
            going out and risk their health in order to get the medicine. The
            Beta Version only supported eleven (11) barangays namely; San roque,
            Santo. Cristo, Santa. Cruz, Baybay, Banaban,
            Marungko,Sulucan,Niugan,Taboc,Pulong yantok, and Engkanto.
          </body>
        </div>
      </div>
    );
  }
}

export default AboutPage;
