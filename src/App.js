import React, { Component } from "react";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu title="Live Chat" />
        </header>
        <div className="App-intro">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
