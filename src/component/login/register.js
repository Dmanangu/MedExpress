import React from "react";
import logoImg from "../../assets/images/app_logo.png"; //location of the logo
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { Navigate } from "react-router-dom";
import "./register.css";
export class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
      redirect: false,
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, address, tel, password, confirmPassword } =
      this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      console.log("Wait");
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, tel });

      this.setState({
        displayName: "",
        email: "",
        tel: "",
        password: "",
        confirmPassword: "",
        redirect: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, tel, password, confirmPassword } = this.state;

    if (this.state.redirect) {
      return <Navigate to={"/Login"} />;
    }
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
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          placeholder="Enter Username"
          required
        />
        <input
          type="email"
          className="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter Email Address"
          required
        />
        <input
          type="tel"
          className="tel"
          name="tel"
          value={tel}
          onChange={this.handleChange}
          placeholder="+63"
          required
        />
        <input
          type="password"
          className="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          placeholder="Confirm Password"
          required
        />
        <div className="footer-reg">
          <button type="button" className="btn-reg" onClick={this.handleSubmit}>
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
