import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchForm from './SearchForm.js';
import Cards from "./Cards.js";


class Body extends Component {
  render() {
    return (
      <div style={{"height":"100%","minHeight":"100%"}} className="pt-1 pb-1 containter bg-light">
        <div className="row" style={{"width":"100%"}}>
            <div className="col"></div>
            <div className="col-6">
                <center><h4>YOUR NUMBER ONE SOURCE OF IT PROFESSIONs</h4></center>
                <SearchForm/>
                <hr></hr>
                <br></br>
                <h4>Latest Companies On IT Source</h4>
            </div>
            <div className="col"></div>
        </div>
        <Cards/>
      </div>
    );
  }
}

export default Body;