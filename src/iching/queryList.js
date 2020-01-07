import React, { useContext } from "react";
import { IchingContext } from "../providers/IchingProvider";
import Moment from "react-moment";
import {
  getHexagramData,
  linesChange,
  generateSecondHex,
  getChangingLines
} from "./utils";

const IchingQueryList = () => {
  const queries = useContext(IchingContext);

  return (
    <div className="container">
      <div className="row">
        {queries.map(q => (
          <div key={q.datetime.toDate()} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="text-muted small mb-4">
                  <Moment format="dd MMM D 'YY LT">
                    {q.datetime.toDate()}
                  </Moment>
                </div>
                <h3 className="h5 mb-2">{q.question}</h3>
                <p>{q.result.toString()}</p>
                <p className="lead">
                  <a href={getHexagramData(q.result).link}>
                    {getHexagramData(q.result).alt_name}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IchingQueryList;
