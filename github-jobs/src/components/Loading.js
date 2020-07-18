import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
  .bubble {
    width: 20px;
    height: 20px;
    margin: 2px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: gray;
    animation: in-out-all 1s infinite;
  }
  .bubble-first {
    width: 18px;
    height: 18px;
  }
  .bubble-second {
    animation-delay: 250ms;
  }
  .bubble-third {
    animation-delay: 500ms;
  }
  @keyframes in-out-all {
    0% {
      width: 20px;
      height: 20px;
    }
    50% {
      width: 10px;
      height: 10px;
    }
    100% {
      width: 20px;
      height: 20px;
    }
  }
`;

function Loading() {
  return (
    <Loader>
      <div className="bubble bubble-first"></div>
      <div className="bubble bubble-second"></div>
      <div className="bubble bubble-third"></div>
    </Loader>
  );
}

export default Loading;
