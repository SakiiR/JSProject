import "./Menu.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Spinner from "../../components/Spinner/Spinner";

class Menu extends Component {
  render() {
    return (
      <div className="MyAppBar">
        <AppBar position="static">
          <Toolbar>
            <Typography className="MyBarInfo" variant="title" color="inherit">
              {this.props.title}
            </Typography>
            <Link to="/">
              <Button color="inherit">Dashboard</Button>
            </Link>
            {!!!this.props.loggedIn && (
              <div>
                <Link to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
                <Link to="/register">
                  <Button color="inherit">Register</Button>
                </Link>
              </div>
            )}
            {!!this.props.loggedIn && (
              <div>
                <Link to="/rooms">
                  <Button color="inherit">Rooms</Button>
                </Link>
                <Button color="inherit" onClick={this.props.handleLogout}>
                  Logout
                </Button>
                <span>Logged in</span>
              </div>
            )}
            <Spinner size={30} show={this.props.loading} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default Menu;
