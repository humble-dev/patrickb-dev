import React from "react";

const AdminPage = () => (
  <section className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4 border-right">
        <div className="py-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Add Thought
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            {/* <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AdminPage;
