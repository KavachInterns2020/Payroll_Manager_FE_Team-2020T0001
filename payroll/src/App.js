import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import Register from "./Components/company_register";
import Navigation from "./Components/Navigation";
import ValidatedLoginForm from "./Components/ValidatedLoginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/api/login" exact>
            <ValidatedLoginForm />
          </Route>
          <Route path="/api/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
