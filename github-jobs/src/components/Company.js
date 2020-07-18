import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  text-align: left;
  margin: 2rem 0;
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;
  color: #282538;
  span {
    font-weight: 400;
  }
`;

function Company() {
  return (
    <Heading>
      <h1>
        Github <span>Jobs</span>
      </h1>
    </Heading>
  );
}

export default Company;
