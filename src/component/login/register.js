import React from "react";
import logoImg from "../../assets/images/app_logo.png"; //location of the logo
import { Link } from "react-router-dom";
import "./register.css";
export class Register extends React.Component {
  render() {
    return (
      <div className="base-containerregister">
        <div className="image">
          <img src={logoImg} alt="" />
        </div>
        <div className="header">
          <h2> Farmacia De Angat</h2>
          <h2>Register</h2>
        </div>
        <input
          type="text"
          className="username"
          placeholder="Enter Username"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Enter Email Address"
          required
        />
        <input type="tel" className="tel" placeholder="+63" required />
        <input
          type="password"
          className="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="password"
          placeholder="Confirm Password"
          required
        />
        <div className="footer-reg">
          <button type="button" className="btn-reg">
            Register
          </button>
        </div>
        <Link to="/Login">
          <div className="account_ready">
            <button type="button" className="account_made">
              {" "}
              I already have an Account
            </button>
          </div>
        </Link>
      </div>
    );
  }
}
