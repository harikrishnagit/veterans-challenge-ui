import React from 'react'
import ReactDOM from "react-dom";
import {Container} from 'semantic-ui-react'
import "./EmployerHome.css";
export class EmployerHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div id="employerHome" className="employerHomeLayout">
            Employer Home page
        </div>
      );
    }
}
export default EmployerHome;
