import React, { useContext, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

import { FilterContext } from "./main";
import Filter from "./filter";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
  border-right: 1px solid grey;
  cursor: default;
  text-align: center;
`;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  align-items: center;
  border-radius: 1rem;
  box-shadow: -1px 0px 3px 1px grey;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

function FilterNav() {
  const [showMenu, toggleShowMenu] = useState(false);
  const { city, country, guests } = useContext(FilterContext);

  const displayFilterMenu = () => {
    toggleShowMenu(true);
  };

  return (
    <>
      <FilterWrapper>
        <InputWrapper>{city ? `${city}, ${country}` : "Finland"}</InputWrapper>
        <InputWrapper style={{ color: "#BDBDBD" }}>
          {guests ? guests : "Add"} guests
        </InputWrapper>
        <InputWrapper
          onClick={displayFilterMenu}
          style={{
            padding: 0,
            lineHeight: "100%",
            borderRight: "none",
            cursor: "pointer",
          }}
        >
          <SearchIcon
            style={{ color: "rgba(235, 87, 87, 0.9)" }}
            fontSize="large"
          />
        </InputWrapper>
      </FilterWrapper>
      {showMenu ? <Filter toggleMenu={toggleShowMenu} /> : null}
    </>
  );
}

export default FilterNav;
