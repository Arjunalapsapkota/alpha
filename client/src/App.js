import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
//uncomment this below and the route when signup form is ready
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DeveloperDashboard from "./components/Developer/Dashboard/Dashboard";
import CreateProfile from "./components/CreateProfile";
import DeveloperProfile from "./components/Developer/Profile/Profile";
import SponsorDashboard from "./components/Sponsor/Dashboard";
//Global CSS Style
import "./css/ds-global.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isloggedin: false };
    //this.PrivateRoute = this.PrivateRoute.bind(this);
  }
  componentDidMount() {
    const presence = window.localStorage.getItem("token");
    this.setState({ isloggedin: presence ? true : false });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={SignUp} />
          {/* <PrivateRoute path="/developer/dashboard" component={userDashboard} /> */}
          {/* <PrivateRoute path="/createprofile" component={createProfile} /> */}
          <Route
            path="/login"
            component={this.state.isloggedin ? Login : Login}
          />
          <Route
            path="/createprofile"
            component={this.state.isloggedin ? CreateProfile : Login}
          />
          <Route
            path="/developer/dashboard"
            component={
              this.state.isloggedin ? DeveloperDashboard : DeveloperDashboard
            }
          />
          <Route
            path="/sponsor/dashboard"
            component={this.state.isloggedin ? SponsorDashboard : Login}
          />

          <Route exact path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
