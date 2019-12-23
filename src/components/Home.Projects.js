import React from "react";

import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-fluid">
        <div className="text-center py-5">
          <h1 className="display-4">Projects</h1>
          <p className="lead">
            Here is a short overview of some of the projects I've been a part
            of.
          </p>
        </div>

        {/* <div className="alert alert-danger py-4 text-center">
          ⚠️ I was working on this then I had severe heartburn, but I will be
          done by the end of 12/23/19 ⚠️
        </div> */}
      </div>
      <div className="container-fluid">
        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectSection;
