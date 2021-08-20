import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AuthRedirect from "./AuthRedirect";

const FundraiserRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole, userToken } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userToken && userRole === "FUNDRAISER" ? (
          <Component {...props} />
        ) : (
          <AuthRedirect />
        )
      }
    />
  );
};

export default FundraiserRoute;
