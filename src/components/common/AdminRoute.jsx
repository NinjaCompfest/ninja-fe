import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AuthRedirect from "./AuthRedirect";

const AdminRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole, userToken } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userToken && userRole === "ADMIN" ? (
          <Component {...props} />
        ) : (
          <AuthRedirect />
        )
      }
    />
  );
};

export default AdminRoute;
