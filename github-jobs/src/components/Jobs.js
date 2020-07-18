import React from "react";

import Loading from "./Loading";
import JobCard from "./JobCard";

function Jobs({ jobs, showJobDetails, loading }) {
  if (loading) return <Loading />;
  return (
    <div className="jobs">
      {jobs.length ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onClick={() => showJobDetails(job.id)}
          />
        ))
      ) : (
        <p style={{ margin: "1rem" }}>
          Slow connection or no jobs found for applied filter
        </p>
      )}
    </div>
  );
}

export default Jobs;
