/* eslint-disable */
import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

import "./styles.scss";
import Lightbox from "./components/lightbox.component";
import ArchLightBox from "./components/archlightbox.component";
import headerImg from "./img/latest/retrolux1.jpg";

// * FAQ ITEM *
const FaqItem = ({ question, answer }) => (
  <div className="py-5">
    <h3 className="text-rustic-primary mb-4 h3">{question}</h3>
    <p className="text-white h5">{answer}</p>
  </div>
);

// * ICONCOLUMN *
const IconColumn = ({ icon, title, text }) => (
  <div className="col-md-3">
    <div className="py-3 text-center">
      <div className="mb-3 text-rustic-primary">{icon}</div>
      <h3 className="text-rustic-primary mb-3 h4">{title}</h3>
      <p className="text-light px-md-4 px-3">{text}</p>
    </div>
  </div>
);

// * NAVBAR *
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark text-rustic-primary bg-rustic-dark fixed-top">
    <div className="container">
      <a className="navbar-brand text-rustic-primary" href="/rusticrentals">
        Rustic Rentals
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
          <li className="nav-item">
            <a className="nav-link" href="#tables">
              Tables
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#arches">
              Arches
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">
              F.A.Q.
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Reservations
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// * HEADER *
const Header = () => (
  <header className="container">
    <div className="text-rustic-primary text-center py-5 my-5">
      <h1 className="display-3 mb-4">Rustic Rentals</h1>
      <p className="text-white h4 mb-5">
        <em>Tables & Arches locally crafted in Orange County.</em>
      </p>
      <div className="py-2">
        <img
          src={headerImg}
          alt="Farm Tables"
          className="w-100 rounded-lg shadow"
        />
      </div>
    </div>
  </header>
);

class RusticRentals extends React.Component {
  scrollToTop = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  render() {
    return (
      <section id="rusticrentals" className="bg-rustic-dark">
        <Navbar />

        <div style={{ paddingTop: 57 }} className="mb-5">
          <Header />
        </div>

        <a name="tables" style={{ padding: 60 }} />
        <div className="container my-5">
          <div className="text-center mb-4">
            <h2 className="text-rustic-primary display-4 mb-4">Our Tables</h2>
            <p className="h4 text-white mx-auto mb-5" style={{ maxWidth: 780 }}>
              <em>
                We had constructed a few tables for our daughter's wedding. We
                were soon delighted to hear that a number of people were
                interested in these tables for their own events.
              </em>
            </p>
            <div className="row">
              <IconColumn
                icon={<i className="fas fa-hammer fa-lg" />}
                title="Handmade in Anaheim"
                text="Crafted from solid wood tops and legs that we distress and stain."
              />
              <IconColumn
                icon={<i className="fas fa-weight-hanging fa-lg" />}
                title="Solid & Very Heavy"
                text="You will need two adults to pick them up and move them around for decorating."
              />
              <IconColumn
                icon={<i className="fas fa-ruler-combined fa-lg" />}
                title="Measurements"
                text="Each table measures 7 feet long and 39 inches wide."
              />
              <IconColumn
                icon={<i className="fas fa-chair fa-lg" />}
                title="Seating for Eight"
                text="Each table seats three adults comfortably on each side and one on each end."
              />
            </div>
          </div>

          <p className="text-light text-left">
            <em>Click on a picture to enlarge it.</em>
          </p>

          <Lightbox />

          <div className="text-center py-5">
            <a
              href="#contact"
              className="btn btn-lg btn-rustic-primary text-white mr-2 mb-3"
            >
              Reserve a Table Today
            </a>
            <a
              href="#faq"
              className="btn btn-lg btn-outline-rustic-primary text-white mb-3"
            >
              Frequently Asked Questions
            </a>
          </div>
        </div>

        <a name="arches" style={{ padding: 60 }} />
        <div className="container pt-5 mb-5">
          <h2 className="display-4 text-center text-rustic-primary mb-5">
            Our Arches
          </h2>
          <div className="row mb-5">
            <div className="col-sm-4 offset-md-2">
              <div className="text-center text-white">
                <h4 className="text-rustic-primary">
                  Arch with horizontal top
                </h4>
                <p>
                  Sevent feet high with a 4' 6" clear space between the posts.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="text-center text-light">
                <h4 className="text-rustic-primary">Arch with round top</h4>
                <p>
                  Ten feet high to the top of its arch with a 5' clear space
                  between the posts.
                </p>
              </div>
            </div>
          </div>
          <p className="text-light">
            <em>Click on a picture to enlarge it.</em>
          </p>

          <ArchLightBox />

          <div className="text-center py-5">
            <a
              href="#contact"
              className="btn btn-lg btn-rustic-primary text-white mr-2 mb-3"
            >
              Reserve an Arch Today
            </a>
            <a
              href="#faq"
              className="btn btn-lg btn-outline-rustic-primary text-white mb-3"
            >
              Frequently Asked Questions
            </a>
          </div>
        </div>

        <a name="pricing" style={{ padding: 60 }} />
        <div className="container py-5 my-5" style={{ maxWidth: 800 }}>
          <h1 className="text-center text-rustic-primary display-4 mb-5">
            Pricing
          </h1>
          <div className="card-deck">
            <div
              className="card text-center bg-rustic-dark"
              style={{ borderColor: "#333" }}
            >
              <div className="card-body">
                <h3 className="card-title text-rustic-primary mb-3">
                  Arch Rental
                </h3>
                <p className="card-text lead text-white mb-2">$125 per event</p>
                <small className="text-light">
                  50% deposit requred for reservation
                </small>
              </div>
            </div>
            <div
              className="card text-center bg-rustic-dark"
              style={{ borderColor: "#333" }}
            >
              <div className="card-body">
                <h3 className="card-title text-rustic-primary mb-3">
                  Table Rental
                </h3>
                <p className="card-text lead text-white mb-2">$75 per event</p>
                <small className="text-light">
                  50% deposit requred for reservation
                </small>
              </div>
            </div>
            <div
              className="card text-center bg-rustic-dark"
              style={{ borderColor: "#333" }}
            >
              <div className="card-body">
                <h3 className="card-title text-rustic-primary mb-3">
                  Table Purchase
                </h3>
                <p className="card-text lead text-white mb-2">$350</p>
                <small className="text-white">
                  Delivery not included, $100 to $200 depending on location
                </small>
              </div>
            </div>
          </div>

          <div className="text-center py-5">
            <a
              href="#contact"
              className="btn btn-lg btn-rustic-primary text-white mr-2 mb-3"
            >
              Reserve One Today
            </a>
            <a
              href="$faq"
              className="btn btn-lg btn-outline-rustic-primary text-white mb-3"
            >
              Frequently Asked Questions
            </a>
          </div>
        </div>

        {/* FAQ */}
        <a name="faq" style={{ padding: 60 }} />
        <div className="w-100 px-2">
          <div
            className="container py-5 my-5"
            style={{ border: "1px solid #555" }}
          >
            <h2 className="display-4 mb-3 text-center text-rustic-primary">
              F.A.Q.
            </h2>
            <p className="h3 text-white mb-5 text-center">
              <em>
                Can't find the answer to your question here? Please{" "}
                <a
                  href="#contact"
                  className="text-rustic-primary"
                  style={{ textDecoration: "underline" }}
                >
                  contact us
                </a>
                .
              </em>
            </p>
            <div className="container text-center" style={{ maxWidth: 770 }}>
              <FaqItem
                question="Can I pick up tables or do they have to be delivered?"
                answer="Tables are heavy, difficult to transport, and can be easily damaged. They have to be delivered and picked up by our crew."
              />
              <FaqItem
                question="How much does delivery and pickup cost?"
                answer="It varies depending on location being delivered to and the number of tables being delivered. We are based in Anaheim Hills, CA. Delivery and pickup combined starts at $125. We will be able to determine what your costs will be when your order is made."
              />
              <FaqItem
                question="Is there a delivery charge for arches?"
                answer="There is no extra charge when delivered and picked up with tables."
              />
              <FaqItem
                question="How do we set up the rental?"
                answer={
                  <>
                    Send us an email at{" "}
                    <a href="/rusticrentals">farmtablesoc@gmail.com</a> with
                    your date, location and number of tables to be rented and we
                    will contact you and set it up by email.
                  </>
                }
              />
              <FaqItem
                question="Do I need to pay a deposit to reserve tables?"
                answer="Yes, to hold the reservation we require a 50% deposit."
              />
              <FaqItem
                question="Do I need to pay a deposit to reserve tables?"
                answer="Yes, to hold the reservation we require a 50% deposit which is refundable up to 2 weeks before the scheduled delivery date."
              />
              <FaqItem
                question="How long do I get the tables for?"
                answer="We understand that you want to decorate tables. Generally you can get them a day or two early before your event. We will arrange a pickup date when your order is submitted."
              />
              <FaqItem
                question="How long do I get the tables for?"
                answer="We understand that you want to decorate tables. Generally you can get them a day or two early before your event. We will arrange a pickup date when your order is submitted."
              />
              <FaqItem
                question="Do you sell tables also?"
                answer="Yes. Tables sell for $350 each. Delivery is not included and can range from $100 to $200 depending on where it's being delivered to."
              />
            </div>
          </div>
        </div>

        <a name="contact" style={{ padding: 60 }} />
        <div className="w-100 bg-light mt-5">
          <div className="container-fluid py-5">
            <div className="d-flex flex-md-row flex-column">
              <div className="col-md-6">
                <div className="p-3">
                  <h2 className="h1 mt-4 my-serif text-center mb-4">
                    Reservations & Contact Us
                  </h2>
                  <p>Please use the following form for any inquiries.</p>
                  <p>
                    If you are wanting to reserve a table, please include the
                    date of your event, your location, and number of tables you
                    would like to request.
                  </p>
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
                        <option value="1">
                          I'd like to rent a table or archway
                        </option>
                        <option value="1">
                          I'd like to buy a table or archway
                        </option>
                        <option value="2">I have a question</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="contact_date_requested">
                            Requested date (if renting/buying)
                          </label>
                          <input
                            type="date"
                            id="contact_date_requested"
                            className="form-control"
                          />
                        </div>
                      </div>
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
                      <a
                        href="/farmtables"
                        className="btn btn-rustic-dark mr-2"
                      >
                        Send Message
                      </a>
                      <a
                        href="/farmtables"
                        className="btn btn-outline-rustic-dark"
                      >
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
            </div>
          </div>
        </div>

        <footer className="py-3">
          <div className="container py-5 text-center">
            <h2 className="text-rustic-primary mb-0">Rustic Rentals</h2>
            <p>
              <em>
                <a href="mailto:farmtablesoc@gmail.com" className="text-white">
                  farmtablesoc@gmail.com
                </a>
              </em>
            </p>

            <p className="small mt-4 mb-0">
              <span
                role="button"
                onClick={this.scrollToTop}
                className="text-white"
                style={{ cursor: "pointer" }}
              >
                Back to the Top
              </span>
            </p>
          </div>
        </footer>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9IGYHnq3cYcNWqnbdZue2sQJqZPXkVk8"
})(RusticRentals);
