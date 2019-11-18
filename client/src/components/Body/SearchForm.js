import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SearchForm extends Component {
  render() {
    return (
                <Form inline>
                    <Form.Control type="text" placeholder="Type in to search" className="mr-sm-2" style={{"width": "75%"}}/>
                    <Form.Control as="select" className="mr-sm-2">
                        <option>Ho Chi Minh</option>
                        <option>Ha Noi</option>
                        <option>Da Nang</option>
                        <option>Others</option>
                    </Form.Control>
                    <Button variant="outline-primary">Search</Button>
                </Form>
    );
  }
}

export default SearchForm;