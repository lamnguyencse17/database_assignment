import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row" style={{ width: "100%" }}>
        <div className="col"></div>
        <div className="col-8">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
