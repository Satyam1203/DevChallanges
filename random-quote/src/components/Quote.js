import React from "react";

import { QuoteWrapper } from "./styles";

function Quote({ quote }) {
  return (
    <div>
      <QuoteWrapper>{quote}</QuoteWrapper>
    </div>
  );
}

export default Quote;
