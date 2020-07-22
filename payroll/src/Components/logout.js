import React from "react";
import { getUser, getToken, removeUserSession } from "./../utils/Common";
import "./CSS/ValidatedLoginForm.css";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Button } from "react-bootstrap";
import Navigation from "./Navigation.js";

function logout(props) {
  const user = getUser();
  const token = getToken();

  // handle click event of logout button
  const handleLogout = () => {
    let object = {
      username: user.username.value,
      password: user.password.value,
    };

    removeUserSession();
    axios
      .post("http://127.0.0.1:8000/auth/logout/", object)
      .then((response) => {
        NotificationManager.success(
          "You have Successfully Logged out!",
          "Successful!",
          2000
        );
        removeUserSession();
        window.location = "/api/login";
      })
      .catch((error) => {
        NotificationManager.error("Error!", "error.response.data");
      });
  };

  return (
    <div>
      <Navigation />
      <div className="row">
        <NotificationContainer />

        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div>
            <h1>
              <span className="badge badge-info">
                {" "}
                Welcome {user.username.value}!
              </span>
            </h1>
            <br />
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-5"></div>
        <div className="col-sm-3">
          <Button variant="danger" onClick={handleLogout} size="lg">
            Logout
          </Button>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default logout;
