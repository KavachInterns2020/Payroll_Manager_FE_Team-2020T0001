import React from "react";
import { getUser, getToken, removeUserSession } from "./../utils/Common";
import "./CSS/ValidatedLoginForm.css";

function Dashboard(props) {
  const user = getUser();
  const token = getToken();
  console.log(user, token);
  // handle click event of logout button

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div>
          Welcome {user.username.value}!<br />
          <br />
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default Dashboard;
