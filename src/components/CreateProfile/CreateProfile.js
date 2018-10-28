import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import BigWrapper from "../SignUp/BigWrapper";
import MiniWrapper from "../SignUp/MiniWrapper";
import Box from "./Box";
import Row from "./Row";
import Col from "./Col";

import ReactDOM from "react-dom";
import "../SignUp/SignUp.css";
import "./CreateProfile.css";
import BrandSmall from "../SignUp/BrandSmall";

class CreateProfile extends Component {
  state = {
    image:
      "https://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg",
    width: 150,
    height: 150,
    border: 10,
    color: [255, 255, 255, 0.6],
    scale: 1.2,
    rotate: 0,
    test: ""
  };
  handleRange = event => {
    this.setState({ scale: event.target.value });
  };
  handleFile = event => {
    console.log(event.target.files[0].name);
    this.setState({ image: event.target.files[0] });
  };
  cropImage = event => {
    event.preventDefault();
    console.log("i am clicked");
    let canvas = "";
    let canvasScaled = "";
    let dataURL = "";
    if (this.editor) {
      canvas = this.editor.getImage();
      canvasScaled = this.editor.getImageScaledToCanvas();
      dataURL = canvas.toDataURL("image/png", 0.2);
      console.log(dataURL);
    }
    this.setState({ test: dataURL });
  };
  setEditorRef = editor => (this.editor = editor);

  fileUploadHandler = event => {
    //ajax call here
  };
  render() {
    return (
      <div className="container-flex">
        <BigWrapper>
          <MiniWrapper>
            <BrandSmall />
            <h6>Complete your profile</h6>
            <hr />
            <label> Profile Picture</label>

            <Box>
              <Row>
                <Col>
                  <AvatarEditor
                    ref={this.setEditorRef}
                    image={this.state.image}
                    width={this.state.width}
                    height={this.state.height}
                    border={this.state.border}
                    color={this.state.color} // RGBA
                    scale={this.state.scale}
                    rotate={this.state.rotate}
                  />
                </Col>
                <Col>
                  <input
                    type="file"
                    onChange={this.handleFile}
                    className="m-1"
                  />
                  <Box>
                    <label>Adjust zoom</label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.2"
                      value={this.state.scale}
                      onChange={this.handleRange}
                      className="m-2"
                    />
                  </Box>
                  <button className="btn btn-info m-1" onClick={this.cropImage}>
                    Save Image
                  </button>
                </Col>
                <Col />
              </Row>
            </Box>
            <label> Skills</label>
            <Box>Skills</Box>
            <label> Education</label>
            <Box>Education</Box>
            <button className="btn btn-info" onClick={this.fileUploadHandler}>
              Save the information
            </button>
            {/* <img
              src={this.state.test}
              style={{ width: "50px", height: "50px" }}
            /> */}
          </MiniWrapper>
        </BigWrapper>
      </div>
    );
  }
}

export default CreateProfile;
