import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 1.5rem 1rem;
  width: 328px;
  padding-top: 22px;
  padding-bottom: 38px;
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

const WindDirection = styled.div`
  position: relative;
  top: 12px;
  text-align: center;
  i {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    margin-right: 10px;
  }
`;

function WindStatus({ value, direction, degrees }) {
  return (
    <Div>
      <p>Wind Status</p>
      <h1>
        {value} <span>mph</span>
      </h1>
      <WindDirection>
        <i
          className="material-icons"
          style={{
            transform: `rotate(${degrees}deg)`,
          }}
        >
          navigation
        </i>
        <span>{direction}</span>
      </WindDirection>
    </Div>
  );
}

export default WindStatus;
