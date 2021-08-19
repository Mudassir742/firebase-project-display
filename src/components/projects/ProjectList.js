import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = (props) => {
  return (
    <div className="project-list section">
      {props.projects &&
        props.projects.map((item) => {
          return (
            <Link to={"/detail/" + item.id} key={item.id}>
              <ProjectSummary projects={item}  />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
