import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./CSS/ValidatedLoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { setUserSession } from "./../utils/Common.js";

function ValidatedLoginForm(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    console.log(username.value);
    axios
      .post("http://127.0.0.1:8000/auth/login/", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        NotificationManager.success(
          "You have Successfully Logged in!",
          "Successful!",
          2000
        );
        setLoading(false);
        console.log(response);
        let usr = {
          username: username,
          password: password,
          isLoggedin: true,
        };
        setUserSession(response.data.token, usr);
        window.location = "/dashboard";
      })
      .catch((error) => {
        setLoading(false);
        NotificationManager.error("Error Loging in!", "error.response.data");
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div>
          <h1>
            {" "}
            <span class="badge badge-primary">Login</span>
          </h1>
          <br />
          <NotificationContainer />
          <br />
          <div>
            Username
            <br />
            <input type="text" {...username} autoComplete="new-password" />
          </div>
          <div style={{ marginTop: 10 }}>
            Password
            <br />
            <input type="password" {...password} autoComplete="new-password" />
          </div>
          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
              <br />
            </>
          )}
          <br />
          <input
            type="submit"
            value={loading ? "Loading..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
          <br />
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default ValidatedLoginForm;
