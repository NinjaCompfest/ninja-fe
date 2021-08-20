import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const DonorRoute = ({ component: Component, role, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) =>
      role === "DONOR" ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default DonorRoute;
