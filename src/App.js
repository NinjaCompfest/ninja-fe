import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Register from "./components/pages/Register";

const App = () => {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
