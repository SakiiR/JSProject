import React, { Component } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Route } from "react-router-dom";
import "./App.css";
import ConnectedMenu from "../ConnectedMenu/ConnectedMenu";
import ConnectedLogin from "../../containers/ConnectedLogin/ConnectedLogin";
import ConnectedRegister from "../../containers/ConnectedRegister/ConnectedRegister";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ConnectedMenu title="Live Chat" />
        </header>
        <div className="App-intro">
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={ConnectedLogin} />
          <Route path="/register" component={ConnectedRegister} />
        </div>
      </div>
    );
  }
}

export default App;
