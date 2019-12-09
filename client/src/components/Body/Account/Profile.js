import React, { Component, Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
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
import Settings from "./Profile/Settings";
import Cv from "./Profile/Cv";
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        {this.props.login ? (
          <div className="row">
            <div className="col"></div>
            <div className="col-9">
              <Tabs defaultActiveKey="settings">
                <Tab eventKey="settings" title="Settings">
                  <Settings/>
                </Tab>
                <Tab eventKey="cv" title="Add a CV">
                  <Cv/>
                </Tab>
              </Tabs>
            </div>
            <div className="col"></div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.control.login,
    id: state.account.id,
  };
}
export default withRouter(connect(mapStateToProps, null)(Profile));
