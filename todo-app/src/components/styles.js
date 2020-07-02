import styled from "styled-components";

const Title = styled.h1`
  margin: 2rem;
  font-family: Raleway;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.045em;
  color: #333;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bdbdbd;
  position: relative;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  line-height: 17px;
  > div {
    min-width: 100px;
    width: min-content;
    padding: 18px;
    position: relative;
    cursor: pointer;
  }
`;

const ActiveIndicator = styled.p`
  width: 90px;
  height: 3px;
  background: #6da6f2;
  border-radius: 4px 4px 0px 0px;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  transition: all 0.5s;
`;

const DeleteBtn = styled.button`
  font-family: Montserrat;
  background: #f18989;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  border: none;
  outline: none;
  color: #fff;
  padding: 12px 20px;
  :active {
    background: #e17979;
  }
`;

export { Title, Menu, DeleteBtn, ActiveIndicator };
