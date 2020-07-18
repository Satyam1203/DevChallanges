import React from "react";

import { Div, Place } from "./styles";

function JobCard({ job, ...props }) {
  let posted_days =
    (new Date() - new Date(job.created_at)) / (1000 * 60 * 60 * 24);
  return (
    <Div {...props}>
      <div className="logo">
        <img src={job.company_logo} width="100%" height="100%" alt="logo" />
      </div>
      <div
        style={{
          marginLeft: "1rem",
          textAlign: "left",
          width: "100%",
        }}
      >
        <a href={job.company_url} target="_blank" rel="noopener noreferrer">
          {job.company}
        </a>
        <p>{job.title}</p>
        <div className="job-detail">
          <h6>{job.type}</h6>
          <div>
            <Place>
              <i className="material-icons">public</i> {job.location}
            </Place>
            <Place>
              <i className="material-icons">access_time</i>{" "}
              {Math.floor(posted_days)} days ago
            </Place>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default JobCard;
