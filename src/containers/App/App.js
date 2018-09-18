import React from "react";
import { Route } from "react-router-dom";
import LDashboard from "../../components/LDashboard/LDashboard";
import "./App.css";
import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import Register from "../Register/Register";

const App = () => (
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

export default App;
