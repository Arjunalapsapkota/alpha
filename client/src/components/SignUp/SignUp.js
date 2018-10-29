import React, { Component, Fragment } from "react";
import BigWrapper from "./BigWrapper";
import MiniWrapper from "./MiniWrapper";
import HomeHeader from "../Global/HomeHeader";
import "./SignUp.css";
import Form from "./Form";

class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <HomeHeader />

        <div className="container-flex signupform-wrapper">
          <BigWrapper>
            <MiniWrapper>
              <Form />
            </MiniWrapper>
          </BigWrapper>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
