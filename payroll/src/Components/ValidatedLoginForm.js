import React from "react";
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

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      var credentials = JSON.stringify(values);
      console.log(credentials);
      setTimeout(() => {
        axios
          .post("http://127.0.0.1:8000/auth/login/", credentials)
          .then((response) => {
            NotificationManager.success(
              "You have Successfully Logged in!",
              "Successful!",
              2000
            );
          })
          .catch((error) => {
            console.log("error" + error.body);
            NotificationManager.error(
              "Error Loging in!",
              "error.response.data"
            );
          });
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string()
        .min(3, "Username is too short - should be 3 chars minimum.")
        .required("Required")
        .matches(
          /^[a-zA-Z0-9_]+$/,
          "Username can only contain alphanumeric characters and underscore(_)"
        ),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 8 chars minimum.")
        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .matches(
          /(?=.*[a-z])/,
          "Password must contain a lowercase alphabetical character."
        ),
      // .matches(
      //   /(?=.*[a-z])/,
      //   "Password must contain a uppercase alphabetical character."
      // )
      // .matches(
      //   /(?=.*[!@#$%^&*])/,
      //   "Password must contain a special character."
      // ),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="Password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
