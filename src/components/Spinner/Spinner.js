import "./Spinner.css";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

class Spinner extends Component {
  render() {
    return (
      !!this.props.show && (
        <CircularProgress size={this.props.size} color="secondary" />
      )
    );
  }
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired
};

export default Spinner;
