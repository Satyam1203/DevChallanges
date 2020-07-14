import React, { useState, useContext } from "react";
import styled from "styled-components";

import { WeatherContext } from "./Main";
import Location from "./Location";

const IconInside = styled.div`
  position: absolute;
  padding: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  z-index: 1;
`;

const SearchBar = styled.input`
  border: 1px solid #e7e7eb;
  width: 70%;
  background: #1e213a;
  color: #fff;
  position: relative;
  padding: 1rem;
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  outline: 0;
  padding-left: 2.5rem;
`;

const SearchBtn = styled.button`
  background: #3c47e9;
  padding: 15px 20px;
  border: none;
  outline: 0;
  font-family: Raleway;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  cursor: pointer;
`;

function SearchNav({ toggleSearchNav }) {
  const [val, setVal] = useState("");
  const { getLocId, locations, getWeather } = useContext(WeatherContext);
  return (
    <>
      <div style={{ textAlign: "right", position: "relative", bottom: "24px" }}>
        <i
          className="material-icons"
          style={{ color: " #E7E7EB", fontSize: "32px", cursor: "pointer" }}
          onClick={() => toggleSearchNav((state) => !state)}
        >
          close
        </i>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconInside>
          <i className="material-icons" style={{ color: "#616475" }}>
            search
          </i>
        </IconInside>
        <SearchBar
          placeholder="search location"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <SearchBtn
          onClick={() => {
            getLocId(val);
          }}
        >
          Search
        </SearchBtn>
      </div>
      <div style={{ height: "75vh", overflowY: "scroll" }}>
        {locations.length === 0 ? (
          <div style={{ color: "#fff", marginTop: "50px" }}>
            Search & wait...
          </div>
        ) : (
          locations.map((loc, i) => (
            <Location
              key={i}
              onClick={() => {
                toggleSearchNav((state) => !state);
                getWeather(loc.woeid);
              }}
            >
              {loc.title}
            </Location>
          ))
        )}
      </div>
    </>
  );
}

export default SearchNav;
