import React from "react";

import IchingApp from "./iching.app";

const IchingPage = () => {
  return (
    <>
      <header className="bg-light text-center py-5">
        <h1 className="mb-0">I Ching</h1>
      </header>
      <div className="w-100 py-5" style={{ minHeight: "75vh" }}>
        <IchingApp />
      </div>
    </>
  );
};

export default IchingPage;
