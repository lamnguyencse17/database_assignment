import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
export default class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleReview() {
    console.log("Hello");
  }
  render() {
    return (
      <Fragment>
        <div className="row" style={{ paddingBottom: "2%" }}>
          <div className="col"></div>
          <div className="col-9">
            <div
              className="container-fluid"
              style={{ background: "#fff", outline: "1px solid black" }}>
              <div className="row">
                <div className="col-9">
                  <p>Company Title goes here</p>
                  <p>Company Website goes here</p>
                  <p> Company Address goes here</p>
                </div>
                <div className="col">
                  <p></p>
                  <Button
                    variant="outline-primary"
                    onClick={() => this.handleReview.bind(this)}>
                    Add a review
                  </Button>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>Company Email goes here</p>
                </div>
                <div className="col">Company Phone goes here</div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" style={{ paddingBottom: "2%" }}>
          <div className="col"></div>
          <div className="col-6" style={{ paddingRight: 0 }}>
            <div
              className="container-fluid"
              style={{
                background: "#fff",
                outline: "1px solid black",
                paddingRight: 0,
              }}>
              Desription about company goes here
            </div>
          </div>
          <div className="col-3" style={{ paddingLeft: 0 }}>
            <div
              className="container-fluid"
              style={{
                background: "#fff",
                outline: "1px solid black",
                paddingLeft: 0,
              }}>
              Latest review goes here
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-9">
            <div
              className="container-fluid"
              style={{ background: "#fff", outline: "1px solid black" }}>
              3 Jobs goes here
            </div>
          </div>
          <div className="col"></div>
        </div>
      </Fragment>
    );
  }
}
