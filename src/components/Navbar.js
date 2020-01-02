import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { signOut } from "../firebase";

const Navbar = props => {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-transparent fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fira text-shadow" to="/">
          {`{PB}`}
        </Link>

        <div className="navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav ml-auto mr-2">
            <li className="nav-item">
              <Link className="nav-link" to="/thoughts">
                Thoughts
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown">
                Menu
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/blocks">
                  Blocks
                </Link>
                {user ? (
                  <>
                    <Link className="dropdown-item" to="/admin">
                      Admin
                    </Link>
                    <Link className="dropdown-item" to="/protected">
                      Protected
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/experiments">
                      EXPERIMENTS
                    </Link>
                  </>
                ) : null}
              </div>
            </li>
          </ul> */}
          <form className="form-inline ml-auto">
            {user ? (
              <button
                className="btn btn-sm btn-outline-light my-1 ml-md-1 mr-md-1 mr-2"
                onClick={() => {
                  signOut(() => {
                    props.history.push("/");
                  });
                }}
              >
                Log Out
              </button>
            ) : (
              <Link
                className="btn btn-sm btn-outline-white my-2 my-sm-0"
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              >
                Log In
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
