import React from "react";

import ProjectCard from "./ProjectCard";

import thumbAsteroid from "../assets/portfolio/asteroidrunner.png";
// import thumbBlacohCMS from "../assets/portfolio/blacoh_cms.png";
import thumbBlacohCRM from "../assets/portfolio/blacoh_crm.png";
import thumbHumbleFisherman from "../assets/portfolio/humblefisherman.png";
import thumbMyFarmAPS from "../assets/portfolio/myfarmaps2.png";
import thumbOthello from "../assets/portfolio/othello.png";
import thumbEportfolio from "../assets/portfolio/programmingstrides.png";
import thumbStorier from "../assets/portfolio/storier.png";
import thumbVasesource from "../assets/portfolio/vasesource.png";

const ProjectArray = [
  {
    title: "Vasesource",
    description: (
      <>
        For Vasesource I was responsible for a lot of the front-end development.
        I created the CSS framework from the design studio's specifications
        using Sass and Bootstrap. I also scripted the complex, collapsible
        megamenu that has 3 distinct layouts depending on the device size. The
        instagram block in the community page is another highlight.
      </>
    ),
    link: "http://staging.vasesource.com/",
    thumb: thumbVasesource
  },
  {
    title: "Blacoh",
    description: (
      <>
        I updated the look and feel of Blacoh.com’s CMS admin section. I added
        data-visualization components with datatables and graphs, as well as
        functionality for a blog.
        <br />
        <br />
        The Blacoh CMS update was well received and we began updating their CRM.
        I was tasked with updating the application code from WebForms to MVC
        Razor and creating new forms and other components.
      </>
    ),
    link: "http://blacoh.com",
    thumb: thumbBlacohCRM
  },
  {
    title: "MyFarmAPS",
    description:
      "MyFarmAPS is a PHP/MySql application that I developed for AgriPower Solar. It is a UI for managing solar panels that are used in agricultural settings. The software has controls for manipulating the panels remotely, as well as tracks and visualizes electrical data with charts and graphs.",
    link: "https://myfarmaps.com/app/login.php",
    thumb: thumbMyFarmAPS
  },
  {
    title: "Storier",
    description:
      "In a nutshell, Storier is part e-commerce store, part library of children’s books and audio material and I am involved in the design and development of two distinct products that require web and mobile applications. The project is based in React and Google Firebase and uses other technologies like Stripe.js for payments, Redux and React hooks for state management, and others.",
    link: "https://storier.us",
    thumb: thumbStorier
  },
  {
    title: "Humble Fisherman",
    description:
      "A text based fishing game written in Java. The object is to catch as many fish as you can and has 4 distinct endings. This final project was voted the best project that semester and was featured in a school-wide showcase.",
    link: "https://humblefisherman.patrickbradshaw.repl.run/",
    thumb: thumbHumbleFisherman
  },
  {
    title: "Asteroid Dodger",
    description:
      "An endless-side-scrolling spaceship game written in Java. The object is to fly a spaceship without hitting any asteroids. This project was voted the 3rd best in class and was featured in a school-wide showcase.",
    link: "https://github.com/humble-dev/asteroid-dodger-java",
    thumb: thumbAsteroid
  },
  {
    title: "Othello",
    description:
      "The game Othello, or Reversi, written in Java. This was featured in a school-wide showcase. It features a clean UI and an algorithm that shows every legal move.",
    link: "https://repl.it/@PatrickBradshaw/Othello",
    thumb: thumbOthello
  },
  {
    title: "Programming Strides",
    description:
      "My original portfolio that was featured in a school-wide show case. I think it displays my deep interest in code and design, as well the creativity with which I approach development.",
    link: "/eportfolio",
    thumb: thumbEportfolio
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
