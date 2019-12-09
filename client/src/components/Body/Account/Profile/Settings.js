import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
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
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleUpdate() {
    // this.props.updateAccount(this.props.id, this.state.name, this.state.blog, "")
    console.log("then")
  }
  render() {
    return (
        <div className="row">
        <div className="col-2"></div>
      <div className="col-6">
        <InputGroup className="mt-3">
          <InputGroup.Prepend className="pt-1 mr-5">
            Your Name
          </InputGroup.Prepend>
          <Form.Control
            placeholder={this.props.name}
            aria-label="Name"
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroup.Prepend className="pt-1 mr-5 pr-1">
            Your Email
          </InputGroup.Prepend>
          <Form.Control
            placeholder={this.props.email}
            aria-label="Email"
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroup.Prepend className="pt-1 mr-3 pr-2">
            Your Password
          </InputGroup.Prepend>
          <Form.Control type="password"
            aria-label="Password"
          />
        </InputGroup>
        <Button className="mt-5 float-right"
                onClick={this.handleUpdate.bind(this)}
                variant="outline-primary">
                <Link to="/profile">Update</Link>
              </Button>
      </div>
      <div className="col"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.control.login,
    id: state.account.id,
    name: state.account.name,
    email: state.account.email
  };
}
export default withRouter(connect(mapStateToProps, null)(Settings));
