import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    min-width: 50px;
    height: 80px;
    overflow: hidden;
    font-size: 64px;
    color: #333;
    display: inline-block;
    transform: translateY(100px);
    animation: letter-up 2000ms infinite;
  }
  div:nth-child(1) {
    animation-delay: 100ms;
  }
  div:nth-child(2) {
    animation-delay: 200ms;
  }
  div:nth-child(3) {
    animation-delay: 300ms;
  }
  div:nth-child(4) {
    animation-delay: 400ms;
  }
  div:nth-child(5) {
    animation-delay: 500ms;
  }
  div:nth-child(6) {
    animation-delay: 600ms;
  }
  div:nth-child(7) {
    animation-delay: 700ms;
  }
  @keyframes letter-up {
    0% {
      transform: translateY(100px);
      display: none;
    }
    100% {
      transform: translateY(0px);
      display: inline-block;
    }
  }
`;

function Loading() {
  return (
    <Loader>
      <div>L</div>
      <div>o</div>
      <div>a</div>
      <div>d</div>
      <div>i</div>
      <div>n</div>
      <div>g</div>
    </Loader>
  );
}

export default Loading;
