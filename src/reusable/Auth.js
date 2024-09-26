import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { getUserData } from "src/api/auth";

const Auth = ({ path, name, render }) => {
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    getUserData().then((res) => setIsLogged(res)).catch((err) => console.log(err))
  }, []);

  return (
    <Route
      render={(props) =>
        isLogged ? (
          <Route path={path} name={name} render={render} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default Auth;
