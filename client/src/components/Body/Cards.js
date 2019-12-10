import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getJobs } from "../../actions/control";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  withRouter
} from "react-router-dom";
class Cards extends Component {
  handleCompanyClick(e) {}
  componentDidMount() {
  }
  render() {
    return (
      <div className="row" style={{ width: "100%" }}>
        <div className="col"></div>
        <div className="col-3">
          <h4>Latest Companies On IT Source</h4>
          {this.props.jobs.slice(0, 3).map((job, index) => {
            return (
              <Fragment>
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title key={index}>{job.name}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                    <Card.Text>{job.salary}</Card.Text>
                    <Link to={{pathname: `/company/${job.id}`, state: {id: job.id}}}>
                      <Button variant="primary">Go somewhere</Button>
                    </Link>
                  </Card.Body>
                </Card>
                <br></br>
              </Fragment>
            );
          })}
        </div>
        <div className="col-3">
            <h4 style={{ color: "#f8f9fa" }}>holder</h4>
            {this.props.jobs.slice(3, 6).map((job, index) => {
              return (
                <Fragment>
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title key={index}>{job.name}</Card.Title>
                      <Card.Text>{job.description}</Card.Text>
                      <Card.Text>{job.salary}</Card.Text>
                      <Link to={{pathname: `/company/${job.id}`, state: {id: job.id}}}>
                        <Button variant="primary">Go somewhere</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  <br></br>
                </Fragment>
              );
            })}
        </div>
        <div className="col-3">
          <h4 style={{ color: "#f8f9fa" }}>holder</h4>
          {this.props.jobs.slice(6, 9).map((job, index) => {
            return (
              <Fragment>
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title key={index}>{job.name}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                    <Card.Text>{job.salary}</Card.Text>
                    <Link to={{pathname: `/company/${job.id}`, state: {id: job.id}}}> 
                      <Button variant="primary">Go somewhere</Button>
                    </Link>
                  </Card.Body>
                </Card>
                <br></br>
              </Fragment>
            );
          })}
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.control.jobs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJobs }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cards));
