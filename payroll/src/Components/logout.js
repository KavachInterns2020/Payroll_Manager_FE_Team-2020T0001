import React from "react";
import { getUser, getToken, removeUserSession } from "./../utils/Common";
import "./CSS/ValidatedLoginForm.css";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
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
    <div className="row">
      <NotificationContainer />

      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div>
          Welcome {user.username.value}!<br />
          <br />
          <input type="button" onClick={handleLogout} value="Logout" />
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default logout;
