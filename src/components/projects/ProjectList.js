import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = (props) => {

  return (
    <div className="project-list section">
      {props.projects && props.projects.map((item)=>{
        return (<ProjectSummary projects={item} key={item.id}/>)
      })}
    </div>
  );
};



export default ProjectList;
