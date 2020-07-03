import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loop } from "@material-ui/icons";

import Loading from "./Loading";
import Quote from "./Quote";
import Author from "./Author";
import Footer from "./Footer";
import { RandomBtn, H1 } from "./styles";

function RandomQuote() {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = (url, array) => {
    setLoading(true);
    axios(url).then((res) => {
      if (res.data.statusCode === 200) {
        if (array) setQuote(res.data.quotes);
        else setQuote(res.data.quote);
        setLoading(false);
      } else {
        console.log("Error! Try Later");
      }
    });
  };

  const getQuote = () =>
    getData("https://quote-garden.herokuapp.com/api/v2/quotes/random", false);

  const getQuotesByAuthor = () => {
    getData(
      `https://quote-garden.herokuapp.com/api/v2/authors/${quotes.quoteAuthor}`,
      true
    );
  };

  useEffect(getQuote, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <RandomBtn onClick={getQuote}>
          random <Loop />
        </RandomBtn>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {quotes.length ? (
            <>
              <H1
                style={{
                  textAlign: "left",
                }}
              >
                {quotes[0].quoteAuthor}
              </H1>
              {quotes.map((quote) => (
                <Quote key={quote._id} quote={quote.quoteText} />
              ))}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                minHeight: "82vh",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Quote quote={quotes.quoteText} />
              <Author
                author={quotes.quoteAuthor}
                genre={quotes.quoteGenre}
                onClick={getQuotesByAuthor}
              />
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default RandomQuote;
