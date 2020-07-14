import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBtn = styled.button`
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  border: none;
  outline: 0;
  cursor: pointer;
  padding: 10px 18px;
`;

const I = styled.i`
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 9px;
  border-radius: 50%;
`;

function Search({ event }) {
  return (
    <SearchWrapper>
      <SearchBtn onClick={event}>Search for places</SearchBtn>
      <I className="material-icons">gps_fixed</I>
    </SearchWrapper>
  );
}

export default Search;
