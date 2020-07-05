import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./CSS/ValidatedLoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ Username: "", Password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        alert(`Logged In Successfully !!!!`);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      Username: Yup.string()
        .min(3, "Username is too short - should be 3 chars minimum.")
        .required("Required")
        .matches(
          /^[a-zA-Z0-9_]+$/,
          "Username can only contain alphanumeric characters and underscore(_)"
        ),
      Password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .matches(
          /(?=.*[a-z])/,
          "Password must contain a lowercase alphabetical character."
        )
        .matches(
          /(?=.*[A-Z])/,
          "Password must contain a uppercase alphabetical character."
        )
        .matches(
          /(?=.*[!@#$%^&*])/,
          "Password must contain a special character."
        ),
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
          <label htmlFor="Username">Username</label>
          <input
            name="Username"
            type="text"
            placeholder="Enter your Username"
            value={values.Username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.Username && touched.Username && "error"}
          />
          {errors.Username && touched.Username && (
            <div className="input-feedback">{errors.Username}</div>
          )}
          <label htmlFor="Password">Password</label>
          <input
            name="Password"
            type="Password"
            placeholder="Enter your Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.Password && touched.Password && "error"}
          />
          {errors.Password && touched.Password && (
            <div className="input-feedback">{errors.Password}</div>
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
