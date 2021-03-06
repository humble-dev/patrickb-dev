import React from "react";
import { UserContext } from "../providers/UserProvider";

const withUser = Component => {
  const WrappedComponent = props => {
    return (
      <UserContext.Consumer>
        {user => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };

  // WrappedComponent.displayName = `withUser(${getDisplayName(
  //   WrappedComponent
  // )})`;

  return WrappedComponent;
};

export default withUser;
