import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div>
          <p>
            Welcome to the dashboard :) Go <Link to="/register">Here</Link> to
            create a new account.
          </p>
          <p>
            Or click <Link to="/login">Here</Link> to login.
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;