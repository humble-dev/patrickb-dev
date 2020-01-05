import React, { Component } from "react";
import { firestore } from "../firebase";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    chapter: "",
    last_q: "",
    last_a: "",
    display_last: "d-none",
    display_error: "d-none"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { question, answer, chapter } = this.state;

    if (question === "" || answer === "" || chapter === "") {
      this.setState({ display_error: "" });
      return false;
    }

    const flashCard = {
      question,
      answer,
      chapter
    };

    firestore.collection("comptia_flashcards").add(flashCard);

    this.setState({
      question: "",
      answer: "",
      last_q: question,
      last_a: answer,
      display_last: "",
      display_error: "d-none"
    });
  };

  render() {
    const {
      question,
      answer,
      chapter,
      last_q,
      last_a,
      display_last,
      display_error
    } = this.state;

    return (
      <div className="AddCard">
        <div className={`alert alert-info ${display_last}`}>
          <h4 className="h6 text-center">Last entered:</h4>
          <p className="mb-2">{last_q}</p>
          <p className="mb-0">{last_a}</p>
        </div>
        <div className={`alert alert-danger text-center ${display_error}`}>
          WHOA THERE.
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea
              className="form-control"
              name="question"
              id="question"
              rows="3"
              value={question}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <textarea
              className="form-control"
              name="answer"
              id="answer"
              rows="3"
              value={answer}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="chapter">Chapter</label>
            <select
              className="form-control"
              name="chapter"
              id="chapter"
              value={chapter}
              onChange={this.handleChange}
            >
              <option></option>
              <option value="1 Troubleshoot">1 Troubleshoot</option>
              <option value="2 Motherboards & CPUs">
                2 Motherboards & CPUs
              </option>
              <option value="3 Power Supplies">3 Power Supplies</option>
              <option value="4 Memory">4 Memory</option>
              <option value="5 Computer Expansion">5 Computer Expansion</option>
              <option value="6 Physical Storage">6 Physical Storage</option>
              <option value="7 Input-output devices">
                7 Input-output devices
              </option>
              <option value="8 Display devices">8 Display devices</option>
              <option value="9 Network basics">9 Network basics</option>
              <option value="10 Network cables & connectors">
                10 Network cables & connectors
              </option>
              <option value="11 Network Protocols">11 Network Protocols</option>
              <option value="12 Wireless Networking">
                12 Wireless Networking
              </option>
              <option value="13 Virtualizations & cloud computing">
                13 Virtualizations & cloud computing
              </option>
              <option value="14 Mobile devices">14 Mobile devices</option>
              <option value="15 Printers">15 Printers</option>
              <option value="16 Custom computers">16 Custom computers</option>
            </select>
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

export default AddCard;
