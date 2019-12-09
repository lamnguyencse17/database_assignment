import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
export default class Cv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
handleAdd(){
    console.log("check")
}
  render() {
    return (
      <Fragment>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                CV 1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Button className="mt-5 float-right"
                onClick={this.handleAdd.bind(this)}
                variant="outline-primary">
                Add a new CV
              </Button>
      </Fragment>
    );
  }
}
