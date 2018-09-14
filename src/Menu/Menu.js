import "./Menu.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="MyAppBar">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="MyBarButton"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="MyBarInfo" variant="title" color="inherit">
              {this.props.title}
            </Typography>
            <Link to="/">
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/register">
              <Button color="inherit">Register</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string
};

export default Menu;
