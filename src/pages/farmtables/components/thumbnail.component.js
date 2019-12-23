import React from "react";

const Thumbnail = ({ src }) => {
  return (
    <>
      <img src={src} alt="" className="w-100 rounded shadow" />
    </>
  );
};

export default Thumbnail;
