import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./CSS/ValidatedLoginForm.css";
import "./CSS/general.css";

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
    <body class="account-page">
      <NotificationContainer />
      <link rel="stylesheet" href="assets/css/font-awesome.min.css"></link>
      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Login</h3>
                <p class="account-subtitle">Access to our dashboard</p>

                <form action="index.html">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      class="form-control"
                      {...username}
                      autoComplete="new-password"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col">
                        <label>Password</label>
                      </div>
                      <div class="col-auto">
                        <a class="text-muted" href="forgot-password.html">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <input
                      class="form-control"
                      {...password}
                      autoComplete="new-password"
                      type="password"
                    />
                  </div>
                  <div class="form-group text-center">
                    <button
                      class="btn btn-primary account-btn"
                      type="submit"
                      value={loading ? "Loading..." : "Login"}
                      onClick={handleLogin}
                      disabled={loading}
                    >
                      Login
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <a href="/api/register">Register</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
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
