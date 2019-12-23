import React from "react";

const ProjectCard = props => {
  const { title, description } = props;

  return (
    <div className="col-sm-6 col-md-4 d-flex self-align-stretch">
      <div className="card mb-4 rounded-lg shadow-sm-">
        <img
          src="http://via.placeholder.com/700x500"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text small">{description}</p>
        </div>
        <div className="card-footer">
          <p className="card-text text-right">
            <a href="/" className="text-secondary">
              <em>Read more &rarr;</em>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
