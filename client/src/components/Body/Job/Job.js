import React, { Component, Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert, { AlertHeading } from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { MdLocationOn } from "react-icons/md";
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
  Redirect,
  withRouter,
} from "react-router-dom";
import {
  IoMdSettings,
  IoIosContacts,
  IoIosFlag,
  IoMdCalendar,
} from "react-icons/io";
import { getSingleJob } from "../../../actions/job";
class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getSingleJob()
  }
  render() {
    return (
      <Fragment>
        <div className="row" style={{ marginTop: 80 }}>
          <div className="col"></div>
          <div className="col-6">
            <div className="row">
              <div className="col-3" style={{ backgroundColor: "#e5e5e5" }}>
                <center>
                  <Alert.Heading>company name</Alert.Heading>
                </center>
                <p>This is description for the company</p>
                <hr />
                <div className="pro" style={{ fontSize: 20, margin: 10 }}>
                  <div>
                    <IoMdSettings /> Out
                  </div>
                  <div>
                    <IoIosContacts /> Number of employee
                  </div>
                  <div>
                    <IoIosFlag /> America
                  </div>
                  <div>
                    <IoMdCalendar /> Moday-Friday
                  </div>
                </div>
                <a href="#">Number of jor</a>
                <center>
                  <a href="#">View company page</a>
                </center>
              </div>
              <div className="col"></div>
              <div className="col-6">
                <div className="Vị trí">
                  <center>
                    <Alert.Heading>Tên công việc</Alert.Heading>
                    <div className="Badge">
                      <Badge variant="info" style={{ margin: 8, fontSize: 16 }}>
                        Vi tri
                      </Badge>
                      <Badge variant="info" style={{ margin: 8, fontSize: 16 }}>
                        Vi tri
                      </Badge>
                      <Badge variant="info" style={{ margin: 8, fontSize: 16 }}>
                        Vi tri
                      </Badge>
                    </div>
                  </center>
                  <a href="#" style={{ fontSize: 24, marginTop: 20 }}>
                    View company website
                  </a>
                  <Button
                    variant="danger"
                    style={{ width: "100%", marginTop: 40 }}>
                    APPLY NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    job: state.job.job,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSingleJob }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Job));
