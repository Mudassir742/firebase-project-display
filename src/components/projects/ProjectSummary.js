import React from "react";

const ProjectSummary = (props) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.projects.title}</span>
        <p>Posted By Coder</p>
        <p className="grey-text">2nd Sep, 2021</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
