import React, { Component } from "react";
import LDashboard from "../../components/LDashboard/LDashboard";
import { Route } from "react-router-dom";
import "./App.css";
import Menu from "../Menu/Menu";
import Login from "../../containers/Login/Login";
import Register from "../../containers/Register/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu title="Live Chat" />
        </header>
        <div className="App-intro">
          <Route exact path="/" component={LDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    );
  }
}

export default App;
