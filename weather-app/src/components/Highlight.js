import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 1.5rem 1rem;
  width: 328px;
  padding-top: 22px;
  padding-bottom: 34px;
  font-family: Raleway;
  text-align: center;
  color: #e7e7eb;
  background: #1e213a;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  h1 {
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    span {
      font-weight: 500;
      font-size: 36px;
    }
  }
`;

function Highlight2({ title, value, unit }) {
  return (
    <Div>
      <p>{title}</p>
      <h1>
        {value} <span>{unit}</span>
      </h1>
    </Div>
  );
}

export default Highlight2;
