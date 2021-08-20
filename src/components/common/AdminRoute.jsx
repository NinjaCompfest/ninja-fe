import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, role, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) =>
      role === "ADMIN" ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default AdminRoute;
