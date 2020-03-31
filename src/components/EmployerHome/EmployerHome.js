import React from 'react'
import ReactDOM from "react-dom";
import {Container, Tab, Menu, Label, Icon} from 'semantic-ui-react'
import "./EmployerHome.css";
export class EmployerHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const panes = [
        {
          menuItem: (
            <Menu.Item key='talentPipeline'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img className="tabMenuItem" src={require('../../assets/Employer/003-group.png')} /></div>
                <div style={{textAlign :"center"}}> Talent Pipeline </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}>Talent Pipeline</Tab.Pane>,
        },
        {
          menuItem: (
            <Menu.Item key='advocateNetwork'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img  className="tabMenuItem" src={require('../../assets/Employer/consulting.png')}/></div>
                <div style={{textAlign :"center"}}> Advocate Network </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}>Advocate Network</Tab.Pane>,
        },
        {
          menuItem: (
            <Menu.Item key='jobPosted'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img  className="tabMenuItem" src={require('../../assets/Employer/001-portfolio.png')}  style={{displayInline :"block"}}/></div>
                <div style={{textAlign :"center"}}> Job Posted </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}>Job Posted</Tab.Pane>,
        },
      ]
      return (
        <div id="employerHome" className="employerHomeLayout">
            <div style={{textAlign :"center", background:'#FFF', padding:'10px'}}><img src={require('../../assets/Employer/consulting.png')}  style={{displayInline :"block"}}/></div>
            <div style={{textAlign :"center", background:'#FFF'}}> Welcome, Vantage Point! </div>
            <Tab menu={{ secondary: true, pointing: true , style: { display: "flex", justifyContent: "center", height:"100%" }}} panes={panes} />
        </div>
      );
    }
}
export default EmployerHome;
