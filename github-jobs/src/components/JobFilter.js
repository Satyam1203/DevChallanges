import React from "react";

import { FilterDiv, InputDiv, Title } from "./styles";

function JobFilter({ toggleFullTime, setLocation }) {
  const select = (el) => {
    console.log(el.checked);
    if (el.checked || el.type === "text") {
      console.log("true wala");
      setLocation(el.value);
      const checkboxes = document.getElementsByClassName("checkbox");
      for (let i = 0; i < 4; i++) {
        checkboxes[i].checked = false;
      }
      el.checked = true;
    } else {
      setLocation("");
      const checkboxes = document.getElementsByClassName("checkbox");
      for (let i = 0; i < 4; i++) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <FilterDiv>
      <div>
        <label>
          <input
            type="checkbox"
            style={{ width: "18px", height: "18px", outline: "0" }}
            onChange={(e) => toggleFullTime(e.target.checked)}
          />
          Full Time
        </label>
      </div>
      <div>
        <Title>Location</Title>
        <InputDiv>
          <i className="material-icons">public</i>
          <input
            placeholder="City, state, zip code or country"
            onChange={(e) => select(e.target)}
          />
        </InputDiv>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            value="London"
            style={{ width: "18px", height: "18px" }}
            onChange={(e) => select(e.target)}
          />
          London
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            value="Amsterdam"
            style={{ width: "18px", height: "18px" }}
            onChange={(e) => select(e.target)}
          />
          Amsterdam
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            value="New York"
            style={{ width: "18px", height: "18px" }}
            onChange={(e) => select(e.target)}
            defaultChecked
          />
          New York
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            value="Berlin"
            style={{ width: "18px", height: "18px" }}
            onChange={(e) => select(e.target)}
          />
          Berlin
        </label>
      </div>
    </FilterDiv>
  );
}

export default JobFilter;
