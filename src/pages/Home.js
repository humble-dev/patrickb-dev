import React from "react";

// import Eastwood from "../assets/images/eastwood-no-comments.png";
// import FlameDesign from "../assets/images/flame-design-science.png";
// import FlameUpgrade from "../assets/images/flame-upgrade.png";

import ProfilePic from "../assets/images/pbradshaw.jpg";
import Background from "../assets/images/pattern_alchemy.gif";

import Header from "../components/Home.Header";
import ProjectSection from "../components/Home.Projects";

const HomePage = () => (
  <>
    <Header />
    <ProjectSection />

    <section
      className="py-5 px-4"
      style={{
        background: `url(${Background})`,
        backgroundAttachment: "fixed"
      }}
    >
      <div
        className="container px-4 py-5 rounded border my-sm-5 my-4 bg-white shadow"
        style={{ maxWidth: 900 }}
      >
        <div className="row d-sm-flex">
          <div className="col-sm-3 self-align-stretch align-items-center">
            <div className="text-center mb-2 my-sm-0 p-3">
              <img
                src={ProfilePic}
                alt=""
                className="w-100 shadow-sm"
                style={{ maxWidth: 190, borderRadius: "100%" }}
              />
            </div>
          </div>
          <div className="col-sm-9 d-flex self-align-stretch align-items-center">
            <div className="pr-sm-2">
              <h2 className="mb-3 fugaz text-center text-sm-left h2">
                About Myself
              </h2>
              <p>
                I am a software developer experienced in React, C#/.NET, and
                SQL. I love building tools. I currently study software
                development at Western Governors University.
              </p>
              <p className="mb-0">
                Outside of programming I like to{" "}
                <a href="https://patrickbradshaw.bandcamp.com/">
                  make music on guitar
                </a>
                , stargaze, play videogames, write and draw. I live near
                Portland with my{" "}
                <a href="https://www.youtube.com/user/WeeKid1675">
                  wonderful wife
                </a>{" "}
                and her amazing family and lots and lots of animals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
