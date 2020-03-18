import React from 'react';
import {
  Link
} from "react-router-dom";
import "./Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import globalStyles from "../../assets/global-styles/bootstrap.module.css";
import cx from "classnames";

export default function Header() {
  return (
    <React.Fragment>
      {}
      < div className={cx(
        globalStyles['d-block'],
        globalStyles['p-2'],
        globalStyles['bg-dark'],
        globalStyles['text-white'])
      }>
        <div className={globalStyles['container-fluid']}>
          <div className={cx(globalStyles.row, globalStyles['justify-content-between'])}>
            <div className={globalStyles.col}>
              Official website of the Veterans Challenge</div>

            <div className={cx(globalStyles['col-auto'], globalStyles['ml-auto'])}>
              <div className={globalStyles.row}>
                <div>
                  Welcome,
                </div>
                <div className={globalStyles['ml-2']}>
                  <FontAwesomeIcon icon={faCog} /> <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className={globalStyles['ml-2']}>
                  Help
                </div>
                <div className={cx(globalStyles['mr-2'], globalStyles['ml-2'])}>
                  |
                </div>
                <div>
                  <a href='/' onClick={() => { localStorage.clear(); }} style={{ color: 'white' }}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={require('../../assets/index.png')} width="80" height="80" alt=""></img>
        </Link>
        <div className="col nopadding">
          <h2>Veteran's Adinistration</h2>
          <h6>Challenge</h6>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/user-management">User Management</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment >
  );
}
