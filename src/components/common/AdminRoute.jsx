import React, { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const AdminRoute = ({ component: Component, ...restOfProps }) => {
  const { userRole } = useContext(AuthContext);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userRole === "ADMIN" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
