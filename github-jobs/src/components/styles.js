import styled from "styled-components";

const Div = styled.div`
  margin: 2rem 0;
  min-width: 340px;
  display: flex;
  height: -webkit-fill-available;
  height: max-content;
  // border: 1px solid black;
  padding: 12px;
  color: #334680;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-family: Roboto;
  .logo {
    min-width: 90px;
    min-height: 90px;
    width: 90px;
    height: 90px;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    :active,
    :focus,
    :visited {
      color: #334680;
    }
  }
  p {
    margin-top: 8px;
    font-size: 18px;
    line-height: 21px;
  }
  h6 {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    padding: 6px 8px;
    border: 1px solid #334680;
    border-radius: 4px;
  }
  .job-detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 12px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }
    }
  }
`;

const Place = styled.div`
  display: inline-flex;
  margin-left: 1rem;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
  i {
    font-size: 1rem;
    margin: 0 8px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const FilterDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
  padding-right: 2rem;
  text-align: left;
  label {
    display: flex;
    align-items: end;
    margin-top: 1rem;
    width: 80%;
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
    input {
      margin-right: 12px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
  margin-top: 2rem;
`;

const InputDiv = styled.div`
  position: relative;
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 18px;
    color: #b9bdcf;
  }
  input {
    width: 100%;
    margin: 14px 0;
    padding: 17px;
    padding-left: 40px;
    font-family: Roboto;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    color: #777;
    border: 0;
    outline: 0;
  }
`;

const CompanyDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  color: #334680;
  background: #ffffff;
  font-family: Roboto;
  .logo {
    height: 42px;
    margin-left: 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    div {
      margin-left: 0;
      margin-top: 10px;
      i {
        margin: 0 8px 0 0;
      }
    }
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    :active,
    :focus,
    :visited {
      color: #334680;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  .jobs {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .jobs {
      width: 100%;
    }
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JobNav = styled.div`
  width: 30%;
  padding-right: 2rem;
  button {
    i {
      margin-right: 15px;
    }
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1e86ff;
    border: 0;
    outline: 0;
    cursor: pointer;
    background: transparent;
  }
  p {
    margin-top: 1rem;
    color: #334680;
    overflow-wrap: break-word;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const JobDetail = styled.div`
  color: #334680;
  font-family: Roboto;
  width: 70%;
  > div {
    display: flex;
    align-items: center;
  }
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
  h6 {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    padding: 6px 8px;
    margin-left: 18px;
    border: 1px solid #334680;
    border-radius: 4px;
  }
  .description {
    display: block;
    p {
      margin: 2rem 0;
    }
  }
  @media (max-width: 768px) {
    margin-top: 36px;
    width: 100%;
    .company-heading {
      flex-direction: column;
      align-items: flex-start;
      h6 {
        margin-top: 4px;
        margin-left: 0;
      }
    }
  }
`;

const Days = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
  i {
    font-size: 1rem;
    margin-right: 8px;
  }
`;

const InputWrapper = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  i {
    margin-top:14px;
    margin-left: 16px;
    color: #b9bdcf;
  }
  .input-div{
    width: 70%; 
    height: 55px;
    background: #fff;
    display: flex;
    flex-wrap: nowrap
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    @media (max-width: 768px){
      width: 100%;
      margin: 0 18px;
    }
  }
`;

const Input = styled.input`
  width: 85%;
  background: #ffffff;
  border: none;
  padding: 18px;
  padding-left: 0;
  height: 100%;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #444;
  outline: 0;
`;

const Button = styled.button`
  margin: 4px;
  background: #1e86ff;
  padding: 14px 48px;
  border-radius: 4px;
  font-family: Roboto;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  outline: 0;
  @media (max-width: 768px) {
    padding: 14px 27px;
  }
`;

export {
  Div,
  Place,
  FilterDiv,
  InputDiv,
  Title,
  CompanyDiv,
  Flex,
  DescriptionWrapper,
  JobNav,
  JobDetail,
  Days,
  InputWrapper,
  Input,
  Button,
};
