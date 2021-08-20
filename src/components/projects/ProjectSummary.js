import React from "react";
import moment from "moment";

const ProjectSummary = (props) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.projects.title}</span>
        <p>
          {props.projects.authFirstName} {props.projects.authLastName}
        </p>

        <p className="grey-text">
          {moment(props.projects.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
