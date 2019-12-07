import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {displayCompany} from "../../actions/control"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
class Cards extends Component {
    handleCompanyClick(e){
    }
  render() {
    return (
      <div className="row" style={{ width: "100%" }}>
        <div className="col"></div>
        <div className="col-3">
          <h4>Latest Companies On IT Source</h4>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Card Title Text</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="company"><Button variant="primary" name="123" onClick={this.handleCompanyClick.bind(this)}>Go somewhere</Button></Link>
            </Card.Body>
          </Card>
          <br></br>
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
          <br></br>
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
        <div className="col-3">
          <h4 style={{ color: "#f8f9fa" }}>holder</h4>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
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
        <div className="col-3">
          <h4 style={{ color: "#f8f9fa" }}>holder</h4>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top"/>
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

export default Cards;
