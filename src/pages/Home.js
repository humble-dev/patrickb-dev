import React from "react";

// import Eastwood from "../assets/images/eastwood-no-comments.png";
// import FlameDesign from "../assets/images/flame-design-science.png";
// import FlameUpgrade from "../assets/images/flame-upgrade.png";

import ProfilePic from "../assets/images/pbradshaw.jpg";

import Header from "../components/Home.Header";
import ProjectSection from "../components/Home.Projects";

const HomePage = () => (
  <>
    <Header />
    <ProjectSection />
    {/* 
    <section className="w-100 py-5 solway">
      <div
        className="container rounded p-3"
        style={{ border: "5px double #ccc", maxWidth: 800 }}
      >
        <div className="row">
          <div className="col-sm-4">
            <div className="p-2">
              <img
                src={ProfilePic}
                alt="Patrick"
                style={{ width: 256, maxWidth: "100%", borderRadius: "100%" }}
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="p-2">
              <p>
                I am a former cab driver, funeral director, tennis coach and
                more. I started programming at Salt Lake Community College in
                2017 and fell in love with both the creative and technical
                aspects of it.
              </p>
              <p>
                Outside of programming, I love to draw, visit national parks,
                and make music on guitar with my wonderful wife.
              </p>
              <p>
                We recently relocated to the Portland, Oregon area with our
                exceptionally long cat Simon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </>
);

export default HomePage;
