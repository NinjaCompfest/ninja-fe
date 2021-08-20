import React, { Component, useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AuthRedirect from "./AuthRedirect";

const AuthRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole, userToken } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userRole && userToken ? <Component {...props} /> : <AuthRedirect />
      }
    />
  );
};

export default AuthRoute;
