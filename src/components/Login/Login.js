import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import BigWrapper from "../SignUp/BigWrapper";
import MiniWrapper from "../SignUp/MiniWrapper";
import BrandSmall from "../SignUp/BrandSmall";
import SocialButton from "./SocialButton";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  handleInputChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    axios
      .post("/api/auth/login", { username, password })
      .then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        this.setState({ message: "" });
        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: "Login failed. Username or password not match"
          });
        }
      });
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="container-flex">
        <BigWrapper>
          <MiniWrapper>
            <div>
              <BrandSmall />

              <div id="LoginForm">
                <div className="container">
                  <div className="login-form">
                    <div className="main-div">
                      <div className="panel">
                        <h4>User Login</h4>
                        <p>Please enter your email and password</p>
                      </div>
                      <form id="Login" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="username"
                            className="form-control"
                            id="inputEmail"
                            placeholder="username"
                            name="username"
                            value={this.username}
                            onChange={this.handleInputChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                            name="password"
                            value={this.password}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="something">
                          <a href="/reset">Forgot password?</a>
                        </div>
                        <div className="something">
                          <a href="/signup">
                            Dont have an Account ? Sign Up here
                          </a>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={this.handleClick}
                        >
                          <i className="fab fa-facebook-square mr-1" />
                          Login with facebook{" "}
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={this.handleClick}
                        >
                          <i className="fab fa-github mr-1" />
                          Login with github{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MiniWrapper>
        </BigWrapper>
      </div>
    );
  }
}

export default Login;
