import React, { Component } from "react";
import "./CSS/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      companyId: "",
      companyAddress: "",
      companyContactNumber: "",
      companyEmailAddress: "",
      companyGSTNumber: "",
      companyWebsite: "",
      companyType: "",
      companyDetails: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case "success":
          NotificationManager.success("Success", "Registeration Complete!");
          break;
        case "error":
          NotificationManager.error("Error", "Registeration Failed!");
          break;
      }
    };
  };

  Namehandler = (event) => {
    this.setState({
      companyName: event.target.value,
    });
  };
  IDhandler = (event) => {
    this.setState({
      companyId: event.target.value,
    });
  };
  Addresshandler = (event) => {
    this.setState({
      companyAddress: event.target.value,
    });
  };

  ContactNumberhandler = (event) => {
    this.setState({
      companyContactNumber: event.target.value,
    });
  };
  Emailhandler = (event) => {
    this.setState({
      companyEmailAddress: event.target.value,
    });
  };
  GSTNumberhandler = (event) => {
    this.setState({
      companyGSTNumber: event.target.value,
    });
  };
  Websitehandler = (event) => {
    this.setState({
      companyWebsite: event.target.value,
    });
  };

  Typehandler = (event) => {
    this.setState({
      companyType: event.target.value,
    });
  };
  Descriptionhandler = (event) => {
    this.setState({
      companyDetails: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // alert(`${this.state.Name}   Registered Successfully !!!!`);
    // console.log(this.state);

    event.preventDefault();
    
    axios
      .post("http://127.0.0.1:8000/api/companies/", this.state)
      .then((response) => {
        NotificationManager.success(
          "You have Succesfully Registered your Company!AdminId and Password is sent to your registered Email Address",
          "Successful!",
          2000
        );
      })
      .catch((error) => {
        NotificationManager.error(
          "Error while Registering the Company!",
          "error.response.data"
        );
      });

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
  };

  render() {
    return (
      <div classNamae="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-2"> </div>
            <div className="col-sm-2">
              <h3 className="badge badge-info">Register Company</h3>
            </div>
            <div className="col-sm-8">
              <div>
                <NotificationContainer />
                <form onSubmit={this.handleSubmit}>
                  <label>Name :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyName}
                    onChange={this.Namehandler}
                    placeholder="Name..."
                  />
                  <br />
                  <label>ID :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyId}
                    onChange={this.IDhandler}
                    placeholder="ID..."
                  />
                  <br />
                  <label>Address :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyAddress}
                    onChange={this.Addresshandler}
                    placeholder="Address..."
                  />
                  <br />
                  <label>Contact Number :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyContactNumber}
                    onChange={this.ContactNumberhandler}
                    placeholder="Contact Number..."
                  />
                  <br />
                  <label>Email :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyEmailAddress}
                    onChange={this.Emailhandler}
                    placeholder="Email..."
                  />
                  <br />
                  <label>GST Number :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyGSTNumber}
                    onChange={this.GSTNumberhandler}
                    placeholder="GST Number..."
                  />
                  <br />
                  <label>Website :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyWebsite}
                    onChange={this.Websitehandler}
                    placeholder="Website..."
                  />
                  <br />
                  <label>Type :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyType}
                    onChange={this.Typehandler}
                    placeholder="Type..."
                  />
                  <br />
                  <label>Description :</label>{" "}
                  <input
                    type="text"
                    value={this.state.companyDetails}
                    onChange={this.Descriptionhandler}
                    placeholder="Description..."
                  />
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    );
  }
}

export default Form;
