import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <div className="App bg-gray-900">
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
