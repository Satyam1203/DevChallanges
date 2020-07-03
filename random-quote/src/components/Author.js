import React from "react";

import { ArrowRightAlt } from "@material-ui/icons";
import { AuthorCard } from "./styles";

function Author({ author, genre, onClick }) {
  return (
    <AuthorCard onClick={onClick}>
      <div>
        <h3>{author}</h3>
        <p>{genre}</p>
      </div>
      <ArrowRightAlt style={{ fontSize: "2rem", color: "#fff" }} />
    </AuthorCard>
  );
}

export default Author;
