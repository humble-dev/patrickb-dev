import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { signOut } from "../firebase";

const Navbar = props => {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top border-bottom ">
      <div className="container-fluid">
        <Link className="navbar-brand fira" to="/">
          {`{PB}`}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-2">
            <li className="nav-item">
              <Link className="nav-link" to="/thoughts">
                Thoughts
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/protected">
                    Protected
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {user ? (
              <button
                className="btn btn-sm btn-outline-dark my-1 ml-md-1 mr-md-1 mr-2"
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
                className="btn btn-sm btn-outline-dark my-2 my-sm-0"
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
