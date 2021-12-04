import React from "react";
import logoImg from "../../assets/images/app_logo.png"; //
import { Link } from "react-router-dom";
//import bg_background from "../../assets/images/bg_background.jpg";
import { auth } from "../../firebase/firebase.utils";
import { Navigate } from "react-router-dom";
import "./login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "", redirect: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    if (this.state.redirect) {
      return <Navigate to={"/"} />;
    }
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
            name="email"
            value={email}
            onChange={this.handleChange}
            className="username"
            placeholder="Username"
          />
        </div>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={this.handleChange}
          className="loginpassword"
          placeholder="Password"
        />
        <div className="footer-login">
          <button
            type="button"
            className="login-btn"
            onClick={this.handleSubmit}
          >
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
