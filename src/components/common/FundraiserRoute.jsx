import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const FundraiserRoute = ({ component: Component, role, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) =>
      role === "FUNDRAISER" ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default FundraiserRoute;
