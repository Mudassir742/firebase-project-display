import React from "react";

const ProjectDetail = (props) => {
  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-container">
          <span className="card-title">
            Project Title - {props.match.params.id}
          </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            quidem officia nesciunt debitis, laborum voluptas dignissimos, ullam
            nulla blanditiis quo, minus exercitationem in ad consequuntur velit
            tempore illo maiores nisi?
          </p>

          <div className="card-action grey ligthen-4 grey-text">
            <div>Posted By Coder</div>
            <div>2nd sep,2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
