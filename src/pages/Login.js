import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { signInWithEmail } from "../firebase";
import withUser from "../components/withUser";

class LoginPage extends Component {
  state = { email: "", password: "", from: "/", user: null };

  get locationState() {
    return this.props.location.state;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, from } = this.state;
    const { history } = this.props;
    signInWithEmail(email, password, () => {
      history.push(from);
    });
    this.setState({ email: "", password: "", from: "/" });
  };

  componentDidMount() {
    if (this.locationState.from) {
      if (this.locationState.from.pathname !== "/") {
        let from = this.locationState.from.pathname;
        this.setState({ from: from });
      }
    }

    const { user } = this.props;
    if (user) this.setState({ user });
  }

  render() {
    const { email, password, from } = this.state;
    const { user } = this.props;
    if (user) return <Redirect to={{ pathname: from }} />;

    console.log("PROPS", this.props);
    console.log("STATE", this.state);

    return (
      <section className="container py-5">
        <div className="mx-auto" style={{ maxWidth: 440 }}>
          <div className="p-3 p-md-4 border rounded-lg">
            <h1 className="h3 mb-4">Sign In</h1>
            <form className="Login" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  autoComplete="on"
                  value={email}
                  onChange={this.handleChange}
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  autoComplete="on"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="pt-3 text-center">
                {/* <button
                  type="submit"
                  className="btn btn-primary btn-block mb-2"
                  onClick={() => {
                    auth.login(() => {
                      props.history.push("/private");
                    });
                  }}
                >
                  Sign In
                </button> */}
                <button type="submit" className="btn btn-dark btn-block mb-2">
                  Sign In
                </button>
                <Link to="/" className="btn btn-outline-dark small btn-block">
                  Back to home page
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(withUser(LoginPage));
