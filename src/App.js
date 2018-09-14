import React, { Component } from "react";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Register from './Register/Register';
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <Menu title="Live Chat" />
          </Link>
        </header>
        <div className="App-intro">
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
        <div>
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
