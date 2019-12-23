import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

import "./farmtable1.scss";
import table1 from "./img/table1.jpg";
import table2 from "./img/table2.jpg";
import table3 from "./img/table3.jpg";
import table4 from "./img/table4.jpg";
import tools1 from "./img/tools1.jpg";
// import materials2 from './img/materials2.jpg';
import crafter1 from "./img/carfter1.jpg";

const Info1 = () => (
  <section className="py-5">
    <div className="container-fluid my-4 px-4">
      <div className="text-center mb-3 pb-3 h6">
        <span className="boxtext">OUR TABLES</span>
      </div>
      <h2 className="display-4 my-serif text-center text-info mb-3 mt-3">
        Timeless & Elegant
      </h2>
      <p
        className="text-center mx-auto text-muted"
        style={{ maxWidth: "800px" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque
        corrupti vel quasi fugiat suscipit maiores ducimus optio culpa,
        repudiandae quod ipsam ut, aspernatur, nam quis enim molestiae aliquam
        laboriosam?
      </p>

      <div className="row -center-all mt-5 pt-1">
        <div className="col-md-2 offset-md-1 col-sm-4">
          <div className="mb-3">
            <i className="far fa-flag text-warning fa-2x"></i>
          </div>
          <h3>One of a kind</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            officiis ipsam molestias.
          </p>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="mb-3">
            <i className="far fa-flag text-warning fa-2x"></i>
          </div>
          <h3>Hand-crafted</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            officiis ipsam molestias.
          </p>
        </div>
        <div className="col-md-2  col-sm-4">
          <div className="mb-3">
            <i className="far fa-flag text-warning fa-2x"></i>
          </div>
          <h3>Bespoke design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            officiis ipsam molestias.
          </p>
        </div>
        <div className="col-md-2 col-sm-4 offset-sm-2 offset-md-0">
          <div className="mb-3">
            <i className="far fa-flag text-warning fa-2x"></i>
          </div>
          <h3>Custom built</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            officiis ipsam molestias.
          </p>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="mb-3">
            <i className="far fa-flag text-warning fa-2x"></i>
          </div>
          <h3>Outstanding value</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            officiis ipsam molestias.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/farmtables" className="btn btn-info">
          Get your very own
        </a>
      </div>
    </div>
  </section>
);

class FarmTable1 extends React.Component {
  render() {
    // const mapstyle = {
    // 	height: '400px'
    // };

    return (
      <div id="farmtables">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
          <a className="navbar-brand fancy" href="/farmtables">
            J. Parker Tables
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/farmtables">
                  Our Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/farmtables">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header>
          <div
            className="w-100 d-flex justify-content-center flex-column px-4"
            style={{
              backgroundImage: `url(${table1})`,
              backgroundSize: "cover",
              backgroundPositionX: "100%",
              backgroundPositionY: "100%",
              height: "80vh"
            }}
          >
            <div
              className="mx-auto py-3 mt-5 font-weight-bold"
              style={{ border: "2px solid white" }}
            >
              <p
                className="h4 mb-0 text-white text-center"
                style={{
                  letterSpacing: "1.5rem",
                  textIndent: "1.5rem"
                }}
              >
                J PARKER TABLES
              </p>
            </div>
            <p className="h2 mb-0 mt-5 scripty text-white text-center">
              Handcrafted in Orange County
            </p>
          </div>
        </header>

        <section className="">
          <div className="row no-gutters">
            <div className="col-md-3 col-sm-6">
              <img src={tools1} className="w-100" alt="tools1" />
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={table2} className="w-100" alt="tools2" />
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={table3} className="w-100" alt="tools1" />
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={table4} className="w-100" alt="tools2" />
            </div>
          </div>
        </section>

        <Info1 />

        <section
          className="py-5"
          style={{
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd"
          }}
        >
          <div className="container">
            <div className="row no-gutters d-flex align-items-center">
              <div className="col-md-6">
                <div className="p-2">
                  <img
                    src={crafter1}
                    className="w-100 shadow-sm rounded"
                    alt="materials2"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center-- mt-5 pr-md-5 pl-md-4 px-3 pb-4">
                  {/* <h2 className="display-4 my-serif text-center text-info mb-3 mt-3">
								Timeless & Elegant
							</h2> */}
                  <div className="mb-3 pb-3 h6">
                    <span className="boxtext">OUR STORY</span>
                  </div>
                  <h2 className="h3 text-info my-serif mb-4 mt-4">
                    Once upon a time in Orange County...
                  </h2>
                  <p className="lead">
                    A brief story about how the products were developed,
                    successes along the way, etc.
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora illum dicta modi quo alias non nesciunt nostrum
                    repellat eligendi sint illo corporis quod impedit quaerat
                    libero, vel sunt, praesentium molestias!
                  </p>
                  <p
                    className="scripty h2 mt-4 text-right"
                    style={{ color: "#ccc" }}
                  >
                    Handcrafted since 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ backgroundColor: "#F8F9FA", borderBottom: "1px solid #ddd" }}
        >
          <div className="container py-5">
            <div className="row px-3 d-flex align-items-center">
              <div className="col-md-6">
                <div>
                  <p>
                    If you're interested in buying one of our tables, or have
                    any questions regarding them, please don't hesitate to
                    contact us.
                  </p>
                  <p className="lead mb-0">CALL (999) 999-9999</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-md-3 mt-5 mt-md-0">
                  <h3 className="mb-2 h6 text-muted font-weight-bold">
                    NEWSLETTER
                  </h3>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address here"
                      aria-label="Enter your email address here"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-info"
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex flex-md-row flex-column">
          <div className="col-md-6">
            <div className="p-3">
              <h2 className="h1 mt-4 my-serif text-center mb-4 text-info">
                Contact Form
              </h2>
              <form>
                <div className="form-group">
                  <label htmlFor="contact_name">Name</label>
                  <input
                    id="contact_name"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_subject">Subject</label>
                  <select id="contact_subject" className="custom-select">
                    <option selected>Select an option</option>
                    <option value="1">Purchase a table</option>
                    <option value="2">General inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact_message">Message</label>
                  <textarea
                    id="contact_message"
                    className="form-control"
                    rows="5"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="form-group mb-5">
                  <a href="/farmtables" className="btn btn-info mr-2">
                    Send Message
                  </a>
                  <a href="/farmtables" className="btn btn-outline-info">
                    Clear Form
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 mapdiv" style={{ padding: "0" }}>
            <Map
              google={this.props.google}
              zoom={10}
              initialCenter={{ lat: 33.7175, lng: -117.8311 }}
            />
          </div>
        </section>

        <div className="w-100" style={{ borderTop: "1px solid #eee" }}>
          <div className="container py-5 text-center my-4">
            <p className="fancy h4 mb-5">J. Parker Tables</p>
            <p className="fancy text-muted mb-0">
              <span className="mr-4">
                <i className="fas fa-phone mr-1" /> (999) 999-999
              </span>
              <span>
                <i className="fas fa-envelope mr-1" /> farmtablesoc@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9IGYHnq3cYcNWqnbdZue2sQJqZPXkVk8"
})(FarmTable1);
