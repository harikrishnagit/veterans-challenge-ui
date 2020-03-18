import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header";
import Body from "../Body/Body";

import globalStyles from "../../assets/global-styles/bootstrap.module.css";

class Template extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className={globalStyles["container-fluid"]}>
          <div className={globalStyles.row}>
            {/* CURRENT ROUTE */}
            <div className={globalStyles["col-md-2"]}>
            </div>

            {/* ALERT MESSAGE */}
            <div className={globalStyles["col-md-10"]}>
              {/* SHOULD BE ITS OWN COMPONENT, REMOVE HARDCODED PARTS */}
              {/* <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                  This is a success alert—check
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div> */}
            </div>
          </div>

          <div className={globalStyles.row}>
            {/* SIDE MENU */}
            <div className={globalStyles["col-md-3"]}>
              {/* SHOULD BE ITS OWN COMPONENT, REMOVE HARDCODED PARTS */}
            </div>

            <div className={globalStyles["col-md-9"]}>
              <Body />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Template;
