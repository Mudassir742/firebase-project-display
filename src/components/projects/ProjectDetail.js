import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetail = (props) => {
  const { auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

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
              <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
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
    auth: state.firebase.auth,
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
