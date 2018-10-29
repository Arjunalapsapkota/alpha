import React, { Component } from "react";
import BigWrapper from "../SignUp/BigWrapper";
import MiniWrapper from "../SignUp/MiniWrapper";
import BrandSmall from "../SignUp/BrandSmall";
import SocialButton from "./SocialButton";
import HomeHeader from "../Global/HomeHeader";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = async event => {
    event.preventDefault();
    //console.log("i am pressed");
    // Forward information (Username&Password) to the server ,
    // server checks if it is valid and responds with a token
    // we then save this token to the local storage
    let res = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(this.state)
    });

    let data = await res.json();
    // ___ saving the received token to the local storage

    localStorage.setItem("token", data.token);
    // if (data.token) this.setState({ isloggedin: true });
    // console.log(this.state);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="page_background">
        <div className="container-flex">
          <HomeHeader />
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
                            <a href="reset.html">Forgot password?</a>
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
      </div>
    );
  }
}

export default Login;
