import React, { Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { updateAccount } from "../../../actions/account";
class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      blog: "",
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleUpdate() {
    this.props.updateAccount(this.props.id, this.state.name, this.state.blog, "")
  }
  render() {
    return (
      <Fragment>
        {this.props.location.state.login ? (
          <div className="row">
            <div className="col"></div>
            <div className="col-9">
              <p>Update Your Info Before Continue</p>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Personal Blog URL (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="blog"
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
              </Form>
              <Button
                onClick={this.handleUpdate.bind(this)}
                variant="outline-primary">
                <Link to="/">Search</Link>
              </Button>
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
    id: state.account.id
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAccount }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Update));
