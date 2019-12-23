import React, { Component } from "react";

import "../scss/colors.scss";

import "./experiment1.styles.scss";

class Experiment1 extends Component {
  // state = {  }
  render() {
    return (
      <section id="experiment1" className="w-100">
        <div
          id="part1"
          className="container-fluid gradient-midnight-city d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="text-center">
            <h1>"Sphinx of black quartz, judge my vow."</h1>
            <ul className="list-unstyled mt-5">
              <li>Stuff for Vasesource</li>
              <li>Blacoh CRM stuff (can wait)</li>
              <li>Update the resume</li>
              <li>Buy some shoes</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Experiment1;
