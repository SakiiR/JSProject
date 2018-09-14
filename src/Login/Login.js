import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
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
          <TextField
            id="username"
            label="Username"
            className="field username"
            onChange={this.handleChange("name")}
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
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
