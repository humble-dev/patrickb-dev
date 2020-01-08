import React from "react";

import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <>
      <section className="bg-lightish py-5">
        <div className="container-fluid">
          <div className="text-center pb-5 pt-4">
            <h2 className="mb-3 fugaz text-shadow-light display-4">
              Featured Projects
            </h2>
            <p className="lead">
              Here's a brief overview of some of the projects I've been a part
              of. You can browse some of my code on{" "}
              <a href="//github.com/humble-dev">GitHub</a>.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <ProjectList />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
