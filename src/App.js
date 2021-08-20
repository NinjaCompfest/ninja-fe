import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Register from "./components/pages/Register";
import AdminDashboard from "./components/pages/AdminDashboard";
import DonatorDashboard from "./components/pages/DonatorDashboard";
import FundriserDashboard from "./components/pages/FundriserDashboard";
import Login from "./components/pages/Login";
import DonorRoute from "./components/common/DonorRoute";
import AdminRoute from "./components/common/AdminRoute";
import FundraiserRoute from "./components/common/FundraiserRoute";
import AuthRedirect from "./components/common/AuthRedirect";
import { getUserToken, getUserRole } from "./services/auth.service";

const App = () => {
  const [userToken, setUserToken] = useState(getUserToken() ?? "");
  const [userRole, setUserRole] = useState(getUserRole() ?? "");

  return (
    <div className="App bg-gray-900">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            role={userRole}
            component={AdminDashboard}
          />
          <FundraiserRoute
            exact
            path="/fundraiser/dashboard"
            role={userRole}
            component={FundriserDashboard}
          />
          <DonorRoute
            exact
            path="/donor/dashboard"
            role={userRole}
            component={DonatorDashboard}
          />
          <AuthRedirect role={userRole} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
