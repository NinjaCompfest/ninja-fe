import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/pages/Register";
import AdminDashboard from "./components/pages/AdminDashboard";
import DonatorDashboard from "./components/pages/DonatorDashboard";
import FundriserDashboard from "./components/pages/FundriserDashboard";
import Login from "./components/pages/Login";
import ProgramDetail from "./components/pages/ProgramDetail";
import ProgramConfirmationDetail from "./components/pages/ProgramConfirmationDetail";
import DonatePage from "./components/pages/DonatePage";
import Withdraw from "./components/pages/Withdraw";
import CrateProgram from "./components/pages/CrateProgram";
import DonorRoute from "./components/common/DonorRoute";
import AdminRoute from "./components/common/AdminRoute";
import FundraiserRoute from "./components/common/FundraiserRoute";
import GuestRoute from "./components/common/GuestRoute";
import AuthRedirect from "./components/common/AuthRedirect";
import { getUserToken, getUserRole } from "./services/auth.service";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const [userToken, setUserToken] = useState(getUserToken() ?? "");
  const [userRole, setUserRole] = useState(getUserRole() ?? "");

  return (
    <div className="App bg-gray-900">
      <AuthContext.Provider
        value={{ userToken, setUserToken, userRole, setUserRole }}
      >
        <Router>
          <Switch>
            <GuestRoute exact path="/login" component={Login} />
            <GuestRoute exact path="/register" component={Register} />
            <AdminRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
            />
            <AdminRoute
              exact
              path="/programs/confirmation/:id"
              component={ProgramConfirmationDetail}
            />
            <FundraiserRoute
              exact
              path="/fundraiser/dashboard"
              component={FundriserDashboard}
            />
            <FundraiserRoute exact path="/new" component={CrateProgram} />
            <FundraiserRoute
              exact
              path="/programs/withdraw/:id"
              component={Withdraw}
            />
            <FundraiserRoute
              exact
              path="/programs/:id"
              component={ProgramDetail}
            />
            <DonorRoute
              exact
              path="/donor/dashboard"
              component={DonatorDashboard}
            />
            <DonorRoute
              exact
              path="/programs/:id/donate"
              component={DonatePage}
            />
            <AuthRedirect />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
