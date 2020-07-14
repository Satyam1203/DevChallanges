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

const PercentValue = styled.div`
  position: relative;
  top: 14px;
  background: #e7e7eb;
  border-radius: 80px;
  width: 80%;
  height: 8px;
  margin: 20px auto;
  span {
    position: absolute;
    top: -20px;
  }
  span:nth-child(1) {
    left: 0;
  }
  span:nth-child(2) {
    left: 50%;
    transform: translateX(-50%);
  }
  span:nth-child(3) {
    right: 0;
  }
  span:nth-child(4) {
    right: 0;
    top: 10px;
  }
`;

function Humidity({ value }) {
  return (
    <Div>
      <p>Humidity</p>
      <h1>
        {value} <span>%</span>
      </h1>
      <PercentValue>
        <span>0</span>
        <span>50</span>
        <span>100</span>
        <span>%</span>
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#FFEC65",
            borderRadius: "80px",
          }}
        ></div>
      </PercentValue>
    </Div>
  );
}

export default Humidity;
