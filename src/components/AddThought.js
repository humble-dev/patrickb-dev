import React, { Component } from "react";
import { firestore } from "../firebase";

class AddThought extends Component {
  state = { thought: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { thought } = this.state;

    const thoughtEntry = {
      thought,
      date: new Date().toISOString()
    };

    console.log("ENTRY", thoughtEntry);

    firestore.collection("thoughts").add(thoughtEntry);

    this.setState({ thought: "" });
  };

  render() {
    const { thought } = this.state;

    return (
      <div className="AddThought">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="note">Write Something Here</label>
            <textarea
              onChange={this.handleChange}
              value={thought}
              name="thought"
              className="form-control"
              rows="4"
            />
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-dark ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddThought;
