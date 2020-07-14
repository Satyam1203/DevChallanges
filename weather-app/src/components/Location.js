import React from "react";
import styled from "styled-components";

const Place = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  margin-top: 1rem;
  padding: 22px 12px;
  text-align: left;
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  cursor: pointer;
  border: 1px solid transparent;
  i {
    visibility: hidden;
  }
  :hover {
    border: 1px solid #616475;
    i {
      visibility: visible;
    }
  }
`;

function Location({ children, ...props }) {
  return (
    <Place {...props}>
      {children}
      <i className="material-icons">keyboard_arrow_right</i>
    </Place>
  );
}

export default Location;
