import PropTypes from "prop-types";
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  handleChange = name => event => {
    const { value } = event.target;
    this.setState((pState, props) => ({
      user: {
        ...pState.user,
        [name]: value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.user);
  };

  render() {
    return (
      <div className="Login">
        <form
          className="container"
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>Please Login</h1>
          <TextField
            id="username"
            label="Username"
            className="field username"
            onChange={this.handleChange("username")}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            className="field password"
            onChange={this.handleChange("password")}
            margin="normal"
          />
          <Button
            className="submit"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
