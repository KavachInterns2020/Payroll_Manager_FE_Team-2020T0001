import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./Components/Register";
import Navigation from "./Components/Navigation";
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navigation />
			<Switch>
				<Route path="/register" exact>
					<Register />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
