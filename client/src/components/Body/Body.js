import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import Cards from "./Cards.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Results from "./Results.js";

class Body extends Component {
  render() {
    return (
      <div
        style={{ height: "100%", minHeight: "100%" }}
        className="pt-1 pb-1 containter bg-light">
        <div className="row" style={{ width: "100%" }}>
          <div className="col"></div>
          <div className="col-6">
            <center>
              <h4>YOUR NUMBER ONE SOURCE OF IT PROFESSIONs</h4>
            </center>
            <SearchForm />
            <hr></hr>
            <br></br>
            {this.props.search ? (
              <div></div>
            ) : (
              <h4>Latest Companies On IT Source</h4>
            )}
          </div>
          <div className="col"></div>
        </div>
        {this.props.search ? (
          <div className="row" style={{ width: "100%" }}>
            <div className="col"></div>
            <div className="col-6">
              <Results />
            </div>
            <div className="col"></div>
          </div>
        ) : (
          <Cards />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.control.search,
  };
}

export default connect(mapStateToProps, null)(Body);
