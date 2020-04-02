
import React from 'react'
import ReactDOM from "react-dom";
import {
  Link
} from "react-router-dom";
import {Container, Button, Form, Segment, Dimmer, Loader, Grid} from 'semantic-ui-react'
import "./JobPosted.css";
import axios from 'axios';
import _ from 'lodash';
import JobCard from "../../common/cards/JobCard"
export class JobPosted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loader:false,
          itemsPerRow:3,
          jobsPosted:[],
          data:[{"postNewJob":true}, {"name":"srikanth","employerImage":"https://react.semantic-ui.com/images/avatar/large/steve.jpg"},{"name":"srikanth",},{"name":"srikanth",},
                {"name":"srikanth",},{"name":"srikanth",},{"name":"srikanth",},
                {"name":"srikanth",},{"name":"srikanth",},{"name":"srikanth"},{"name":"srikanth"}]
        };
    }
    componentDidMount() {
        this.fetchJobs();
    }

    fetchJobs = () => {
      this.setState({loader:true})
      let fetchJobsEndpoint = 'http://localhost:8092/getJobsPosted/123/testsessionid';
      axios.get(fetchJobsEndpoint)
        .then(function (response) {
            const jobsPosted = response.data;
            jobsPosted.splice(0, 0, {"postNewJob":true});
            this.setState({jobsPosted:jobsPosted})
            this.setState({loader:false})
        }.bind(this))
        .then(function (error) {
            console.log(error);
            this.setState({loader:false})
        }.bind(this));
    }

    buildGrid = () => {
      if (this.state.jobsPosted) {
        //this.state.data.splice(0, 0, {"postNewJob":true});
        let dataCopy = [...this.state.jobsPosted]
        let gridArray = []
        let gridRow = []
        while (dataCopy[0]) {
          for (let i = 0; i < this.state.itemsPerRow; i++) {
            if (dataCopy[0]) {
                gridRow.push(dataCopy.shift())
            }
          }
          gridArray.push(gridRow)
          gridRow = []
        }
        return gridArray.map((row, index) => {
          return (
            <Grid.Row key={index}>
              {row.map(jobData => {
                    if (_.has(jobData, "postNewJob")) {
                      return (<Grid.Column><Segment id="postNewJob"><Button className="tertiary"  basic color='blue'><div>+</div><div>Post a job</div></Button></Segment></Grid.Column>)
                    } else {
                      return (<Grid.Column><JobCard jobData={jobData}/></Grid.Column>)
                    }
                  }
                )
              }
            </Grid.Row>
          )
        })
      }
    }

    render() {
      return (<Segment id="jobPosted" className="jobPosted">
              	<Dimmer active={this.state.loader} inverted>
              		<Loader inverted>Loading</Loader>
              	</Dimmer>
                <div>
                {this.state.jobsPosted ? (
                    <Grid columns={this.state.itemsPerRow}>
                      {this.buildGrid()}
                     </Grid>
                   ) : ''}
                </div>
              </Segment>
      );
    }
}

export default JobPosted;
