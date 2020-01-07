import React, { useContext } from "react";
import { IchingContext } from "../providers/IchingProvider";
import Moment from "react-moment";
// import { firestore } from "../firebase";

import {
  getHexagramData,
  linesChange,
  generateSecondHex,
  getChangingLines
} from "./utils";

const IchingQueryTable = () => {
  const queries = useContext(IchingContext);

  return (
    <>
      <table className="table border">
        <thead className="thead-light">
          <tr>
            <th style={{ width: "50%" }}>Question</th>
            {/* <th>Result</th> */}
            <th>Hex 1</th>
            <th>Changes</th>
            <th>Hex 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        {queries ? (
          <tbody className="v-align-center">
            {queries.map(q => (
              <tr key={q.id}>
                <td>
                  <div>
                    <span className="small text-muted">
                      <Moment format="MMM D 'YY LT">
                        {q.datetime.toDate()}
                      </Moment>
                    </span>
                  </div>
                  <div>{q.question}</div>
                </td>
                {/* <td>{q.result.toString()}</td> */}
                <td>
                  <a href={getHexagramData(q.result).link}>
                    {getHexagramData(q.result).number}{" "}
                    {getHexagramData(q.result).alt_name}
                  </a>
                </td>
                <td>
                  {linesChange(q.result)
                    ? getChangingLines(q.result).toString()
                    : "None"}
                </td>
                <td>
                  {linesChange(q.result) ? (
                    <a href={getHexagramData(generateSecondHex(q.result)).link}>
                      {getHexagramData(generateSecondHex(q.result)).number}{" "}
                      {getHexagramData(generateSecondHex(q.result)).alt_name}
                    </a>
                  ) : (
                    "None"
                  )}
                </td>
                <td>
                  <div>
                    <button className="btn btn-sm btn-primary mr-1">
                      Add Notes
                    </button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table>
    </>
  );
};

export default IchingQueryTable;
