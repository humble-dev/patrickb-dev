import React from "react";

const ProjectCard = props => {
  const { title, description, thumb, link } = props;

  return (
    <div className="col-sm-6 col-md-4 d-flex self-align-stretch">
      <div className="card mb-4 rounded-lg shadow-sm">
        <img src={thumb} className="card-img-top shadow-lg" alt="..." />
        <div className="card-body py-4">
          <h4 className="card-title h4 solway font-weight-light">{title}</h4>
          <p className="card-text small">{description}</p>
        </div>
        <div className="card-footer">
          <p className="card-text text-right">
            <a href={link} target="_blank" className="text-secondary">
              <em>Link &rarr;</em>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
