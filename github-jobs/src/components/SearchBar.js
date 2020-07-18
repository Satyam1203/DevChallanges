import React, { useState } from "react";
import Background from "../background.png";

import { InputWrapper, Input, Button } from "./styles";

function SearchBar({ searchJob }) {
  const [query, setQuery] = useState(``);
  return (
    <InputWrapper
      style={{
        background: `url(${Background}) gray`,
      }}
    >
      <div className="input-div">
        <i className="material-icons">work_outlined</i>
        <Input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={() => searchJob(query)}>Search</Button>
      </div>
    </InputWrapper>
  );
}

export default SearchBar;
