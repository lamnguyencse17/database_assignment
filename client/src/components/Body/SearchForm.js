import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {bindActionCreators} from "redux";
import {searchProcess} from "../../actions/search";
import {displaySearch} from "../../actions/control";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ""
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSearch(){
    this.props.searchProcess(this.state.term);
    this.props.displaySearch();
  }
  render() {
    return (
                <Form inline>
                    <Form.Control type="text" name="term" onChange={this.handleChange.bind(this)} placeholder="Type in to search" className="mr-sm-2" style={{"width": "88%"}}/>
                    <Button variant="outline-primary" onClick={() => this.handleSearch()}><Link to="/results">Search</Link></Button>
                </Form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchProcess, displaySearch}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);