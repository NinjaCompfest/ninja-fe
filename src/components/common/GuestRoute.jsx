import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AuthRedirect from "./AuthRedirect";

const GuestRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole, userToken } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !userRole && !userToken ? <Component {...props} /> : <AuthRedirect />
      }
    />
  );
};

export default GuestRoute;
