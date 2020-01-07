import React from "react";

const B1 = "{";
const B2 = "},";

const Blank = () => {
  let arr = [];
  for (let i = 0; i < 64; i++) {
    arr.push({ number: i });
  }
  return (
    <div className="container">
      <h1>array</h1>
      {arr.map(a => (
        <div key={a.number}>
          <div>{B1}</div>
          <div>hexagram: {a.number + 1}</div>
          <div>other_titles: []</div>
          <div>
            lines: {B1}
            <br />
            {B2}
          </div>
          <div>{B2}</div>
        </div>
      ))}
    </div>
  );
};

export default Blank;
