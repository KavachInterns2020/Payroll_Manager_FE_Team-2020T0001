import React, { Component } from "react";
import Register from "./Components/company_register";
import Navigation from "./Components/Navigation";
import ValidatedLoginForm from "./Components/ValidatedLoginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Dashboard from "./Components/Dashboard.js";
import Logout from "./Components/logout.js";
import "./Components/CSS/general.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute path="/api/login" component={ValidatedLoginForm} />
          <PublicRoute path="/api/register" component={Register} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}
export default App;
