import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetail = (props) => {
  if (props.project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-container">
            <span className="card-title">
              {props.project.title} - {props.match.params.id}
            </span>
            <p className="center">{props.project.content}</p>

            <div className="card-action gret ligthen-4 grey-text">
              <div>
                Posted By {props.project.authFirstName}{" "}
                {props.project.authLastName}
              </div>
              <div>2nd sep,2021</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading......</div>;
  }
};

const mapStateToProps = (state, myprops) => {
  const id = myprops.match.params.id;
  const projects = state.firestore.data.projects;
  const desireProject = projects ? projects[id] : null;
  return {
    project: desireProject,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetail);
