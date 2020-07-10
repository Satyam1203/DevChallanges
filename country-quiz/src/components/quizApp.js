import React from "react";

import styled from "styled-components";
import QuestionBox from "./questionBox";

const Background = styled.div`
  background: rgba(96, 102, 208, 0.7);
  border-radius: 33px;
  transform: rotate(-65.14deg);
  transform-origin: center;
  width: 80vh;
  height: 60vw;
  position: fixed;
  left: 80%;
  top: -20%;
  z-index: -1;
`;

function QuizApp() {
  return (
    <>
      <Background />
      <Background
        style={{
          left: "0%",
          top: "25%",
        }}
      />
      <QuestionBox />
    </>
  );
}

export default QuizApp;
