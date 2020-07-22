import React from "react";
import { getUser, getToken, removeUserSession } from "./../utils/Common";
import "./CSS/ValidatedLoginForm.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Department } from "./Department.js";
import { Designation } from "./Designation.js";
import { Employee } from "./Employee.js";
import Navigation from "./Navigation.js";
import Leaves from "./Leaves.js";
import Overtime from "./Overtime.js";
function Dashboard(props) {
  const user = getUser();
  const token = getToken();
  console.log(user, token);
  // handle click event of logout button

  return (
    <div>
      <Navigation />
      <div className="row">
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
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <Tabs>
            <TabList>
              <Tab>Employee</Tab>
              <Tab>Deapartment</Tab>
              <Tab>Designation</Tab>
              <Tab>Leaves</Tab>
              <Tab>Overtime</Tab>
            </TabList>

            <TabPanel>
              <Employee />
            </TabPanel>
            <TabPanel>
              <Department />
            </TabPanel>
            <TabPanel>
              <Designation />
            </TabPanel>
            <TabPanel>
              <Leaves />
            </TabPanel>
            <TabPanel>
              <Overtime />
            </TabPanel>
          </Tabs>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Dashboard;
