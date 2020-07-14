import React, { useState, useContext } from "react";
import styled from "styled-components";

import Search from "./Search";
import SearchNav from "./SearchNav";
import { WeatherContext } from "./Main";

const Wrapper = styled.div`
  background: #1e213a;
  padding: 3rem 2.5rem;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const H1 = styled.h1`
  font-family: Raleway;
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #e7e7eb;
  span {
    color: #a09fb1;
    font-size: 48px;
  }
`;

const WeatherState = styled.p`
  font-family: Raleway;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #a09fb1;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
`;

function WeatherToday({ weather }) {
  const { celcius, convertToFahrenheit } = useContext(WeatherContext);
  const [searchNavVisible, setsearchNavVisible] = useState(false);
  return (
    <Wrapper>
      {searchNavVisible ? (
        <>
          <SearchNav toggleSearchNav={setsearchNavVisible} />
        </>
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Search event={() => setsearchNavVisible(true)} />
          <div
            style={
              {
                //   background: `url(${bg}) #1e2389`,
                //   backgroundSize: "contain",
                //   backgroundRepeat: "no-repeat",
                //   width: "100%",
              }
            }
          >
            <img
              src={require(`../images/${weather.consolidated_weather[0].weather_state_name
                .split(" ")
                .join("")}.png`)}
              alt="weather-state"
            />
          </div>
          <H1>
            {celcius ? (
              <>
                {weather.consolidated_weather[0].the_temp.toPrecision(3)}
                <span>&#176;C</span>
              </>
            ) : (
              <>
                {convertToFahrenheit(
                  weather.consolidated_weather[0].the_temp.toPrecision(3)
                )}
                <span>&#176;F</span>
              </>
            )}
          </H1>
          <WeatherState>
            {weather.consolidated_weather[0].weather_state_name}
          </WeatherState>
          <div>
            <Paragraph>
              Today
              <span style={{ display: "inline-block", width: "40px" }}>
                &#183;
              </span>{" "}
              {new Date(weather.time).toUTCString().slice(0, 11)}
            </Paragraph>
            <Paragraph style={{ marginTop: "2rem" }}>
              <i className="material-icons">location_on</i>
              {weather.title}
            </Paragraph>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default WeatherToday;
