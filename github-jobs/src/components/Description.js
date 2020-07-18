import React from "react";
import parse from "html-react-parser";

import {
  Title,
  Place,
  CompanyDiv,
  DescriptionWrapper,
  JobNav,
  JobDetail,
  Days,
} from "./styles";

function Description({ job, showJobs }) {
  let posted_days =
    (new Date() - new Date(job.created_at)) / (1000 * 60 * 60 * 24);
  return (
    <DescriptionWrapper>
      <JobNav>
        <button onClick={() => showJobs([])}>
          <i className="material-icons">keyboard_backspace</i>Back to search
        </button>
        <Title>How to apply</Title>
        {parse(job.how_to_apply)}
      </JobNav>
      <JobDetail>
        <div className="company-heading">
          <h2>{job.title}</h2> <h6>{job.type}</h6>
        </div>
        <Days>
          <i className="material-icons">access_time</i>{" "}
          {Math.floor(posted_days)} days ago
        </Days>
        <CompanyDiv>
          <div className="logo">
            <img src={job.company_logo} width="auto" height="100%" alt="logo" />
          </div>
          <div>
            <a href={job.company_url} target="_blank" rel="noopener noreferrer">
              {job.company}
            </a>
            <Place>
              <i className="material-icons">public</i> {job.location}
            </Place>
          </div>
        </CompanyDiv>
        <div className="description">{parse(job.description)}</div>
      </JobDetail>
    </DescriptionWrapper>
  );
}

export default Description;
