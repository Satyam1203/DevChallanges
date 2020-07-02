import styled from "styled-components";

const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  input {
    position: relative;
    top: 6px;
    margin-right: 8px;
    width: 1.5rem;
    height: 1.5rem;
    outline: none;
    visibility: hidden;
  }
  input:hover ~ .checkbox {
    background-color: #6da6f233;
  }
  input:checked ~ .checkbox {
    background-color: #6da6f2;
    border-color: #6da6f2;
  }
  input:checked ~ .checkbox::after {
    display: block;
  }
`;

const CustomBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 4px;
  border: 1px solid grey;
  transition: 0.5s;
  ::after{
    content: "";
    position: absolute;
    display: none;
    width: 6px;
    height: 15px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    left: 7px
  }
}`;

const TaskWrapper = styled.div`
  margin: 1.5rem 0;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  position: relative;
`;

export { TaskWrapper, Label, CustomBox };
