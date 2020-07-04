import React, { Component } from "react";
import "./App.css";

const EmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ContactRegex = RegExp(/^\d{10}$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      ID: null,
      Address: null,
      ContactNumber: null,
      Email: null,
      GSTNumber: null,
      Website: null,
      RegistrationNumber: null,
      Type: null,
      Description: null,
      DateOfRegistration: null,
      formErrors: {
        Name: "",
        ID: "",
        Address: "",
        ContactNumber: "",
        Email: "",
        GSTNumber: "",
        Website: "",
        RegistrationNumber: "",
        Type: "",
        Description: "",
        DateOfRegistration: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      alert(`${this.state.Name} Registered Successfully !!!!`);
      console.log(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert(`Please fill all the fields properly`);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Name":
        formErrors.Name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ID":
        formErrors.ID =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Address":
        formErrors.Address =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ContactNumber":
        formErrors.ContactNumber = ContactRegex.test(value)
          ? ""
          : "Invalid Contact Number";
        break;
      case "Email":
        formErrors.Email = EmailRegex.test(value)
          ? ""
          : "Invalid Email Address";
        break;
      case "GSTNumber":
        formErrors.GSTNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Website":
        formErrors.Website =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "RegistrationNumber":
        formErrors.RegistrationNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Type":
        formErrors.Type =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Description":
        formErrors.Description =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "DateOfRegistration":
        formErrors.DateOfRegistration =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register Your Company</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Name">
              <label htmlFor="Name">Name</label>
              <input
                className={formErrors.Name.length > 0 ? "error" : null}
                placeholder=" Name"
                type="text"
                name="Name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Name.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>
            <div className="ID">
              <label htmlFor="ID">ID</label>
              <input
                className={formErrors.ID.length > 0 ? "error" : null}
                placeholder="ID"
                type="text"
                name="ID"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ID.length > 0 && (
                <span className="errorMessage">{formErrors.ID}</span>
              )}
            </div>
            <div className="Address">
              <label htmlFor="Address">Address</label>
              <input
                className={formErrors.Address.length > 0 ? "error" : null}
                placeholder="Address"
                type="text"
                name="Address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Address.length > 0 && (
                <span className="errorMessage">{formErrors.Address}</span>
              )}
            </div>
            <div className="ContactNumber">
              <label htmlFor="ContactNumber">Contact Number</label>
              <input
                className={formErrors.ContactNumber.length > 0 ? "error" : null}
                placeholder="Contact Number"
                type="text"
                name="ContactNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ContactNumber.length > 0 && (
                <span className="errorMessage">{formErrors.ContactNumber}</span>
              )}
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                className={formErrors.Email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Email.length > 0 && (
                <span className="errorMessage">{formErrors.Email}</span>
              )}
            </div>
            <div className="GSTNumber">
              <label htmlFor="GSTNumber">GST Number</label>
              <input
                className={formErrors.GSTNumber.length > 0 ? "error" : null}
                placeholder="GST Number"
                type="text"
                name="GSTNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.GSTNumber.length > 0 && (
                <span className="errorMessage">{formErrors.GSTNumber}</span>
              )}
            </div>
            <div className="Website">
              <label htmlFor="Website">Website</label>
              <input
                className={formErrors.Website.length > 0 ? "error" : null}
                placeholder="Website"
                type="text"
                name="Website"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Website.length > 0 && (
                <span className="errorMessage">{formErrors.Website}</span>
              )}
            </div>
            <div className="RegistrationNumber">
              <label htmlFor="RegistrationNumber">Registration Number</label>
              <input
                className={
                  formErrors.RegistrationNumber.length > 0 ? "error" : null
                }
                placeholder="Registration Number"
                type="text"
                name="RegistrationNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.RegistrationNumber.length > 0 && (
                <span className="errorMessage">
                  {formErrors.RegistrationNumber}
                </span>
              )}
            </div>
            <div className="Type">
              <label htmlFor="Type">Type</label>
              <input
                className={formErrors.Type.length > 0 ? "error" : null}
                placeholder="Type"
                type="text"
                name="Type"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Type.length > 0 && (
                <span className="errorMessage">{formErrors.Type}</span>
              )}
            </div>
            <div className="Description">
              <label htmlFor="Description">Description</label>
              <input
                className={formErrors.Description.length > 0 ? "error" : null}
                placeholder="Description"
                type="text"
                name="Description"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Description.length > 0 && (
                <span className="errorMessage">{formErrors.Description}</span>
              )}
            </div>
            <div className="DateOfRegistration">
              <label htmlFor="DateOfRegistration">Date Of Registration</label>
              <input
                className={
                  formErrors.DateOfRegistration.length > 0 ? "error" : null
                }
                placeholder="Date Of Registration"
                type="date"
                name="DateOfRegistration"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.DateOfRegistration.length > 0 && (
                <span className="errorMessage">
                  {formErrors.DateOfRegistration}
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

export default App;
