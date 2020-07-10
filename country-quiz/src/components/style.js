import styled from "styled-components";

const QuestionCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  width: 25vw;
  min-width: 400px;
  min-height: 500px;
  padding: 2rem;
  position: relative;
  @media (max-width: 600px) {
    min-width: 350px;
  }
`;

const H1 = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #f2f2f2;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Question = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
  margin-top: 2rem;
`;

const Option = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  border-radius: 12px;
  border: 2px solid rgba(96, 102, 208, 0.7);
  padding: 14px;
  padding-left: 5rem;
  margin: 1.5rem 0;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
  outline: 0;
  background: #fff;
  color: rgba(96, 102, 208, 0.8);
  :hover {
    background: #f9a826;
    color: #fff;
    border: 2px solid #f9a826;
  }
`;

const OptionKey = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 24px;
  color: rgba(96, 102, 208, 0.8);
  line-height: 36px;
`;

const ResultDiv = styled.div`
  text-align: center;
  h1 {
    margin-top: 4rem;
    font-family: Poppins;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    color: #1d355d;
  }
  p {
    font-family: Poppins;
    font-size: 18px;
    line-height: 27px;
    color: #1d355d;
    span {
      font-size: 32px;
      font-weight: 600;
      color: aqua;
    }
  }
  button {
    margin-top: 3.5rem;
    bottom: 0;
    border-radius: 12px;
    text-align: center;
    padding: 17px 61px;
    font-weight: 600;
    color: #1d355d;
    border: 2px solid #1d355d;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    cursor: pointer;
    outline: 0;
    background: #fff;
    :hover {
      border-color: #1d355d99;
    }
  }
`;

const NextBtn = styled.button`
  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  padding: 14px 2rem;
  outline: 0;
  border: none;
  cursor: pointer;
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export { H1, Option, OptionKey, ResultDiv, Question, NextBtn, QuestionCard };
