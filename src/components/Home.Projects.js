import React from "react";

import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section className="bg-lightish py-5">
      <div className="container-fluid">
        <div className="text-center pb-5 pt-4">
          <h2 className="mb-3 fugaz text-shadow-light">Featured Projects</h2>
          <p className="">
            Here's a brief overview of some of the projects I've been a part of.
            Some of my code is available on{" "}
            <a href="//github.com/humble-dev">GitHub</a>.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectSection;
