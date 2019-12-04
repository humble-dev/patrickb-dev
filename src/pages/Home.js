import React from "react";

// import Eastwood from "../assets/images/eastwood-no-comments.png";
import FlameRemote from "../assets/images/flame-remote-working.png";
// import FlameDesign from "../assets/images/flame-design-science.png";
// import FlameUpgrade from "../assets/images/flame-upgrade.png";

const HomePage = () => (
  <>
    <header className="container">
      <div className="row d-md-flex align-items-center">
        <div className="col-md-6 order-md-1 order-2">
          <div className="py-sm-5">
            <h1 className=" mb-1">Patrick Bradshaw</h1>
            <h2
              className="font-weight-bold h6 text-info mb-3"
              style={{ letterSpacing: 4 }}
            >
              SOFTWARE DEVELOPER
            </h2>
            <div className="py-1">
              <p className="my-3">
                I build intuitive user interfaces for compelling projects. My
                strengths are in the front-end and I code primarily in React. I
                also have experience building in the .NET framework, C#, SQL,
                and more.
              </p>
              <p className="my-3">
                I love to make music and art with my wonderful wife and handsome
                cat. We live in the PNW.
              </p>
            </div>
            <div className="my-md-4 mt-4 mb-5 pb-4 pb-md-0">
              <a href="/" className="btn btn-sm btn-dark mr-1">
                Email Me
              </a>
              <a href="/" className="btn btn-sm btn-outline-info mr-1">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a href="/" className="btn btn-sm btn-outline-info mr-1">
                <i className="fab fa-github-alt"></i> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-2 order-1">
          <div className="mb-2">
            <img src={FlameRemote} alt="FlameRemote" className="w-100" />
          </div>
        </div>
      </div>
    </header>

    <section className="bg-light py-5">
      <div className="container">
        <h1>Projects, etc.</h1>
        <p>For this part, a couple of ideas.</p>
        <p>
          First idea, regular bootstrap 4 cards with a main image, some text,
          some links to Github or to the project. Then for each one there can be
          a static page? That's a lot of work though. Maybe JUST the cards with
          links, if stuff has to be images only, I could place them in a GitHub
          readme file...
        </p>
        <p>
          The second idea was to have 4 major sections - demos, Advantage, Solar
          (and other clients), Storier...
        </p>
        <p>Just gotta present it in a way that looks professional.</p>
      </div>
    </section>
  </>
);

export default HomePage;
