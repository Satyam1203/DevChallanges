import React from "react";
import styled from "styled-components";

const Number = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 12px;
  text-decoration: none;
  text-align: center;
  border: 1px solid #b7bcce;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #555;
  padding-top: 12px;
  cursor: pointer;
  :active,
  :visited {
    color: #555;
  }
  :hover {
    color: #1e86ff;
    border-color: #1e86ff;
  }
  :focus {
    color: #fff;
    background: #1e86ff;
    border: 1px solid #1e86ff;
  }
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin: 4px;
    padding-top: 4px;
  }
`;

function Pagination({ jobsPerPage, total, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / jobsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div style={{ textAlign: "end" }}>
      {pages.map((page) => (
        <Number key={page} href="!#" onClick={() => setCurrentPage(page)}>
          {page}
        </Number>
      ))}
    </div>
  );
}

export default Pagination;
