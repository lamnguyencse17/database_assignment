import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
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
import { addCv } from "../../../../actions/account";
class Cv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleAdd() {
    console.log("check");
  }
  render() {
    return (
      <Fragment>
        <Accordion defaultActiveKey="1">
          {this.props.cvs.map((cv, index) => {
            return (
              <Fragment>
                <Card>
                  <Card.Header>
                    <div className="row">
                      <div className="col-3">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0">
                          CV 1
                        </Accordion.Toggle>
                      </div>
                      <div className="col">
                        <Button
                          className="float-right"
                          onClick={this.handleAdd.bind(this)}
                          variant="outline-primary">
                          Delete This
                        </Button>
                      </div>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>{`Email: ${cv.email}`}</p>
                      <p>{`Phone: ${cv.phone}`}</p>
                      <p>{`Skill: ${cv.skill}`}</p>
                      <p>{`Job target: ${cv.job_target}`}</p>
                      <p>{`Document: ${cv.document}`}</p>
                      <p>{`Experience: ${cv.experience}`}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Fragment>
            );
          })}
        </Accordion>
        <Button
          className="mt-5 float-right"
          onClick={this.handleAdd.bind(this)}
          variant="outline-primary">
          Add a new CV
        </Button>
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    id: state.control.id,
    cvs: state.account.cv,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCv }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cv));
