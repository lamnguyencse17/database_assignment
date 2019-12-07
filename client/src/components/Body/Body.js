import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import Cards from "./Cards.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Results from "./Results.js";
import Jobs from "./Jobs/Jobs";
import Company from "./Company/Company";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

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
            </div>
            <div className="col"></div>
          </div>
          <Switch>
            <Route exact path="/">
              <Cards />
            </Route>
            <Route path="/results">
              <div className="row" style={{ width: "100%" }}>
                <div className="col"></div>
                <div className="col-6">
                  <Results />
                </div>
                <div className="col"></div>
              </div>
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
          </Switch>
          {/*{this.props.search ? ( 
          <div className="row" style={{ width: "100%" }}>
            <div className="col"></div>
            <div className="col-6">
              <Results />
            </div>
            <div className="col"></div>
          </div>
        ) : ( this.props.job ? <Jobs/> : (this.props.company? <Company/> : <Cards />)
        )}*/}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.control.search,
    home: state.control.home,
    job: state.control.job,
    company: state.control.company,
  };
}

export default connect(mapStateToProps, null)(Body);
