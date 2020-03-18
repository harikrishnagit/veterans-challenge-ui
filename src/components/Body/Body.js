import React from "react";
import { Route } from "react-router-dom";
// import Header from '../Header/Header.js';
//import Home from '../Home/Home.js';
import { UserManagementContainer } from "../UserManagement/UserManagementContainer";

export default function Navbar() {
  return (
    <React.Fragment>
      <Route
        exact
        path="/user-management"
        component={UserManagementContainer}
        render={props => <UserManagementContainer />}
      />

    </React.Fragment>
  );
}
