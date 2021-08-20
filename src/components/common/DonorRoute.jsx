import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AuthRedirect from "./AuthRedirect";

const DonorRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole, userToken } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userToken && userRole === "DONOR" ? (
          <Component {...props} />
        ) : (
          <AuthRedirect />
        )
      }
    />
  );
};

export default DonorRoute;
