import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/pages/Register";
import AdminDashboard from "./components/pages/AdminDashboard";
import Login from "./components/pages/Login";
import ProgramDetail from "./components/pages/ProgramDetail";
import DonatorDashboard from "./components/pages/DonatorDashboard"
import TopUpPage from "./components/pages/TopUpPage"
import ProgramConfirmationDetail from "./components/pages/ProgramConfirmationDetail"
import DonatePage from "./components/pages/DonatePage"
import FundriserDashboard from "./components/pages/FundriserDashboard"
import Withdraw from "./components/pages/Withdraw"
import CrateProgram from "./components/pages/CrateProgram"

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
          <Route exact path="/donator/dashboard">
            <DonatorDashboard />
          </Route>
          <Route exact path="/fundriser/dashboard">
            <FundriserDashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Route exact path="/new" component={CrateProgram} />
        <Route exact path="/programs/withdraw/:id" component={Withdraw} />
        <Route exact path="/programs/:id" component={ProgramDetail} />
        <Route exact path="/programs/confirmation/:id" component={ProgramConfirmationDetail} />
        <Route exact path="/programs/:id/donate" component={DonatePage} />
      </Router>
    </div>
  );
};

export default App;
