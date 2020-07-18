import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import Jobs from "./Jobs";
import JobFilter from "./JobFilter";
import Company from "./Company";
import Description from "./Description";
import Footer from "./Footer";
import Pagination from "./Pagination";

import { Flex } from "./styles";

const jobsPerPage = 5;

function Main() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(``);
  const [location, setLocation] = useState(`New York`);
  const [fullTime, toggleFullTime] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchQuery}&full_time=${fullTime}&location=${location}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setCurrentPage(1);
        setLoading(false);
      })
      .catch(console.error);
  }, [location, fullTime, searchQuery]);

  const showJobDetails = (id) => {
    const job = jobs.filter((job) => job.id === id);
    setSelectedJob(job);
  };

  const searchJob = (query) => {
    setSearchQuery(query);
    setJobs([]);
  };

  const lastIdx = currentPage * jobsPerPage;
  const firstIdx = lastIdx - jobsPerPage;

  return (
    <div>
      <Company />
      {selectedJob.length ? (
        <Description job={selectedJob[0]} showJobs={setSelectedJob} />
      ) : (
        <>
          <SearchBar searchJob={searchJob} />
          <Flex>
            <JobFilter
              toggleFullTime={toggleFullTime}
              setLocation={setLocation}
            />
            <Jobs
              jobs={jobs.slice(firstIdx, lastIdx)}
              showJobDetails={showJobDetails}
              loading={loading}
            />
          </Flex>
          <Pagination
            jobsPerPage={jobsPerPage}
            total={jobs.length}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default Main;
