import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/pages/Register";
import AdminDashboard from "./components/pages/AdminDashboard";
import Login from "./components/pages/Login";
import ProgramDetail from "./components/pages/ProgramDetail";

const App = () => {
  return (
    <div className="App bg-gray-900">
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Route exact path="/programs/:id" component={ProgramDetail} />
      </Router>
    </div>
  );
};

export default App;
