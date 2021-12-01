import React from "react";
import logoImg from "../../assets/images/app_logo.png"; //
import { Link } from "react-router-dom";
import bg_background from "../../assets/images/bg_background.jpg";
import "./login.css";
export class Login extends React.Component {
  render() {
    return (
      <div className="base-container">
        <div className="image">
          <img src={logoImg} alt="" />
        </div>
        <div className="header">
          <h2>Farmacia De Angat</h2>
          <h2>Login</h2>
        </div>
        <div className="emailaddress">
          <input
            type="username"
            required
            className="username"
            placeholder="Username"
          />
        </div>
        <input
          type="password"
          required
          className="loginpassword"
          placeholder="Password"
        />
        <div className="footer-login">
          <button type="button" className="login-btn">
            Login
          </button>
        </div>
        <div className="register">
          <Link to="/Login/Register">
            <button type="button" className="btn-reg">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
