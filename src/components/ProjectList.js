import React from "react";

import ProjectCard from "./ProjectCard";

const ProjectArray = [
  {
    title: "Vasesource",
    description: (
      <>
        For Vasesource, I was responsible for a lot of the front-end
        development. I developed the CSS framework from the design studio's
        specifications using Sass and Bootstrap. I also scripted the complex,
        collapsible megamenu that has 3 distinct layouts depending on the device
        size. The instagram block in the community page is another highlight.
      </>
    ),
    link: "http://staging.vasesource.com/"
  },
  {
    title: "Blacoh",
    description: ""
  },
  {
    title: "Blacoh",
    description: ""
  },
  {
    title: "Champion Bolt",
    description: ""
  },
  {
    title: "MyFarmAPS",
    description: ""
  },
  {
    title: "Storier",
    description: ""
  },
  {
    title: "Humble Fisherman",
    description: ""
  },
  {
    title: "Asteroid Dodger",
    description: ""
  },
  {
    title: "Othello",
    description: ""
  },
  {
    title: "Programming Strides",
    description: ""
  }
];

const ProjectList = () => {
  return (
    <>
      <div className="row">
        {ProjectArray.map(el => (
          <ProjectCard key={el.title} {...el} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
