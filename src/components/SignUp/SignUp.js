import React, { Component } from "react";
import BigWrapper from "./BigWrapper";
import MiniWrapper from "./MiniWrapper";
import "./SignUp.css";
import Form from "./Form";

class SignUp extends Component {
  render() {
    return (
      <div className="container-flex">
        <BigWrapper>
          <MiniWrapper>
            <Form />
          </MiniWrapper>
        </BigWrapper>
      </div>
    );
  }
}

export default SignUp;
