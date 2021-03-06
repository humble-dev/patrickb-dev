import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
