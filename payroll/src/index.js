import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Register from "./Components/company_register";
import Navigation from "./Components/Navigation";
import ValidatedLoginForm from "./Components/ValidatedLoginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
