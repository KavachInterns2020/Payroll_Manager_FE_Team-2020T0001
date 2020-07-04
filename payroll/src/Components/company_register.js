import React, { Component } from "react";
import "./CSS/company_register.css";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const EmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ContactRegex = RegExp(/^\d{10}$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class company_register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: null,
      companyId: null,
      companyAddress: null,
      companyContactNumber: null,
      companyEmailAddress: null,
      companyGSTNumber: null,
      companyWebsite: null,
      companyType: null,
      companyDetails: null,
      formErrors: {
        companyName: "",
        companyId: "",
        companyAddress: "",
        companyContactNumber: "",
        companyEmailAddress: "",
        companyGSTNumber: "",
        companyWebsite: "",
        companyType: "",
        companyDetails: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (formValid(this.state)) {
      console.log(this.state);

      axios
        .post("http://127.0.0.1:8000/api/companies/", this.state)
        .then((response) => {
          NotificationManager.success(
            "You have Registered your Company!",
            "Successful!",
            2000
          );
          this.setState({
            companyName: "",
            companyId: "",
            companyAddress: "",
            companyContactNumber: "",
            companyEmailAddress: "",
            companyGSTNumber: "",
            companyWebsite: "",
            companyType: "",
            companyDetails: "",
          });
        })
        .catch((error) => {
          NotificationManager.error(
            "Error while Registering the Company!",
            "error.response.data"
          );
        });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      NotificationManager.error(
        "Error while Registering the Company!",
        "Fill all the details correctly"
      );
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "companyName":
        formErrors.companyName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "companyId":
        formErrors.companyId =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "companyAddress":
        formErrors.companyAddress =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "companyContactNumber":
        formErrors.companyContactNumber = ContactRegex.test(value)
          ? ""
          : "Invalid Contact Number";
        break;
      case "companyEmailAddress":
        formErrors.companyEmailAddress = EmailRegex.test(value)
          ? ""
          : "Invalid Email Address";
        break;
      case "companyGSTNumber":
        formErrors.companyGSTNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "companyWebsite":
        formErrors.companyWebsite =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      case "companyType":
        formErrors.companyType =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "companyDetails":
        formErrors.companyDetails =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <NotificationContainer />

        <div className="form-wrapper">
          <h1>Register Your Company</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Name">
              <label htmlFor="companyName">Name</label>
              <input
                className={formErrors.companyName.length > 0 ? "error" : null}
                placeholder=" Name"
                type="text"
                name="companyName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyName.length > 0 && (
                <span className="errorMessage">{formErrors.companyName}</span>
              )}
            </div>
            <div className="ID">
              <label htmlFor="companyId">ID</label>
              <input
                className={formErrors.companyId.length > 0 ? "error" : null}
                placeholder="ID"
                type="text"
                name="companyId"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyId.length > 0 && (
                <span className="errorMessage">{formErrors.companyId}</span>
              )}
            </div>
            <div className="Address">
              <label htmlFor="companyAddress">Address</label>
              <input
                className={
                  formErrors.companyAddress.length > 0 ? "error" : null
                }
                placeholder="Address"
                type="text"
                name="companyAddress"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyAddress.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyAddress}
                </span>
              )}
            </div>
            <div className="ContactNumber">
              <label htmlFor="companyContactNumber">Contact Number</label>
              <input
                className={
                  formErrors.companyContactNumber.length > 0 ? "error" : null
                }
                placeholder="Contact Number"
                type="text"
                name="companyContactNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyContactNumber.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyContactNumber}
                </span>
              )}
            </div>
            <div className="Email">
              <label htmlFor="companyEmailAddress">Email</label>
              <input
                className={
                  formErrors.companyEmailAddress.length > 0 ? "error" : null
                }
                placeholder="Email"
                type="email"
                name="companyEmailAddress"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyEmailAddress.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyEmailAddress}
                </span>
              )}
            </div>
            <div className="GSTNumber">
              <label htmlFor="companyGSTNumber">GST Number</label>
              <input
                className={
                  formErrors.companyGSTNumber.length > 0 ? "error" : null
                }
                placeholder="GST Number"
                type="text"
                name="companyGSTNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyGSTNumber.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyGSTNumber}
                </span>
              )}
            </div>
            <div className="Website">
              <label htmlFor="companyWebsite">Website</label>
              <input
                className={
                  formErrors.companyWebsite.length > 0 ? "error" : null
                }
                placeholder="Website"
                type="text"
                name="companyWebsite"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyWebsite.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyWebsite}
                </span>
              )}
            </div>

            <div className="Type">
              <label htmlFor="companyType">Type</label>
              <input
                className={formErrors.companyType.length > 0 ? "error" : null}
                placeholder="Type"
                type="text"
                name="companyType"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyType.length > 0 && (
                <span className="errorMessage">{formErrors.companyType}</span>
              )}
            </div>
            <div className="Description">
              <label htmlFor="companyDetails">Description</label>
              <input
                className={
                  formErrors.companyDetails.length > 0 ? "error" : null
                }
                placeholder="Description"
                type="text"
                name="companyDetails"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.companyDetails.length > 0 && (
                <span className="errorMessage">
                  {formErrors.companyDetails}
                </span>
              )}
            </div>

            <div className="Register">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default company_register;
