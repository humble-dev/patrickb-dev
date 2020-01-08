import React, { Component } from "react";
import { firestore } from "../firebase";

import {
  generateSecondHex,
  generateResult,
  visualizeHexagram,
  getHexagramData,
  linesChange
} from "./utils";

import IchingQueryTable from "./queryTable";
// import IchingQueryList from "./queryList";

class IchingApp extends Component {
  state = { question: "", result: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { question } = this.state;
    const result = generateResult();

    if (question === "") return false;

    const query = {
      datetime: new Date(),
      question,
      result
    };

    firestore.collection("iching_queries").add(query);

    this.setState({
      question: "",
      result
    });

    // document.getElementById("QuestionForm").classList.add("d-none");
    // document.getElementById("ResponsePanel").classList.remove("d-none");
  };

  // handleGo = () => {
  //   let hexaChange = {
  //     hexNumber: 0,
  //     preferred_name: "Preferred Name",
  //     other_names: ["Name1", "Name2"],
  //     lines: [
  //       {
  //         number: 1,
  //         image: "Jist of line 1",
  //         notes: "Notes of line 1"
  //       },
  //       {
  //         number: 2,
  //         image: "Jist of line 2",
  //         notes: "Notes of line 2"
  //       },
  //       {
  //         number: 3,
  //         image: "Jist of line 3",
  //         notes: "Notes of line 3"
  //       },
  //       {
  //         number: 4,
  //         image: "Jist of line 4",
  //         notes: "Notes of line 4"
  //       },
  //       {
  //         number: 5,
  //         image: "Jist of line 5",
  //         notes: "Notes of line 5"
  //       },
  //       {
  //         number: 6,
  //         image: "Jist of line 6",
  //         notes: "Notes of line 6"
  //       }
  //     ]
  //   };

  //   for (let idx = 1; idx <= 64; idx++) {
  //     hexaChange.hexNumber = idx;
  //     firestore
  //       .collection("iching_changes")
  //       .doc("" + idx)
  //       .set(hexaChange);
  //   }
  // };

  render() {
    const { question, result } = this.state;

    return (
      <>
        <div id="QuestionForm" className="container">
          <h2>Question</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="question">Enter your question</label>
              <textarea
                name="question"
                id="question"
                rows="3"
                className="form-control"
                value={question}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div id="ResponsePanel" className="d-none container-fluid">
          {result ? (
            <>
              <h5>Generated</h5>
              {visualizeHexagram(result)}
              <ul>
                <li>{result.toString()}</li>
                <li>{getHexagramData(result).alt_name}</li>
              </ul>
            </>
          ) : null}

          {linesChange(result) ? (
            <>
              <h5>Second</h5>
              <ul>
                <li>{generateSecondHex(result).toString()}</li>
                <li>
                  {getHexagramData(generateSecondHex(result))
                    ? getHexagramData(generateSecondHex(result)).alt_name
                    : null}
                </li>
              </ul>
            </>
          ) : null}
        </div>

        <div id="QueryTable" className="container-fluid mt-5 mb-5 d-none---">
          <IchingQueryTable />
        </div>

        {/* <div id="QueryList" className="my-5 d-none">
          <IchingQueryList />
        </div> */}
      </>
    );
  }
}

export default IchingApp;
