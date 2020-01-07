import React from "react";

const ProjectCard = props => {
  // const { title, description, thumb, link } = props;
  const { title, thumb, link } = props;

  return (
    <div className="col-sm-6 col-md-4 d-flex self-align-stretch">
      <div className="card mb-4 rounded-lg shadow-sm">
        <img src={thumb} className="card-img-top shadow-lg---" alt="..." />
        {/* <div className="card-body py-4">
          <h4 className="card-title h5 mt-2 fugaz">{title}</h4>
          <p className="card-text">{description}</p>
        </div> */}
        <div className="card-footer">
          <div className="card-text">
            <div className="d-flex justify-content-between">
              <span className="fugaz">{title}</span>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <em>Link &rarr;</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
