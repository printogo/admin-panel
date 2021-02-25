import React from "react";
import { Redirect, Route } from "react-router-dom";

const Auth = ({ path, name, render }) => {
  return (
    <Route
      render={(props) =>
        localStorage.getItem('token') ? (
          <Route path={path} name={name} render={render} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default Auth;
