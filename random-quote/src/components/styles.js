import styled from "styled-components";

const RandomBtn = styled.button`
  display: flex;
  align-items: center;
  font-family: Raleway;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #333333;
  outline: none;
  border: none;
  background: transparent;
  margin-right: 30px;
  cursor: pointer;
  border-radius: 1rem;
  padding: 1rem;
  transition: background 100ms;
  :active {
    background: #f7df9477;
  }
`;

const QuoteWrapper = styled.div`
  padding: 0 100px;
  width: 45%;
  text-align: left;
  margin: 100px auto;
  font-family: Raleway;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  border-left: 8px solid #f7df94;
  @media (max-width: 1024px) {
    width: 80%;
    padding: 0 80px;
  }
  @media (max-width: 600px) {
    width: 90%;
    padding: 0 50px;
    font-size: 24px;
  }
`;

const H1 = styled.div`
  padding: 0 100px;
  width: 45%;
  margin: auto;
  margin-top: 40px;
  font-family: Raleway;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
  @media (max-width: 1024px) {
    width: 80%;
    padding: 0 80px;
  }
  @media (max-width: 600px) {
    width: 90%;
    padding: 0 50px;
  }
`;

const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 30px;
  cursor: pointer;
  font-family: Raleway;
  text-align: left;
  width: 35%;
  margin: 0 auto;
  transition: background 0.3s;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
    h3 {
      font-size: 16px;
    }
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    color: #4f4f4f;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
  :hover {
    background: #333;
    h3 {
      color: #f2f2f2;
    }
  }
`;

export { RandomBtn, QuoteWrapper, H1, AuthorCard };
