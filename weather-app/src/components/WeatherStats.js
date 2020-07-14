import React from "react";
import styled from "styled-components";
import WeatherCard from "./WeatherCard";
import Highlight from "./Highlight";
import Humidity from "./HumidityCard";
import WindStatus from "./WindStatusCard";
import Footer from "./Footer";

const StatsWrapper = styled.div`
  height: 100vh;
  background: #100e1d;
  padding: 40px 120px 0px 120px;
  overflow-y: scroll;
  @media (max-width: 1440px) {
    padding: 40px 80px 0px 80px;
  }
  @media (max-width: 1024px) {
    height: max-content;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const WeatherHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const UpcomingWeather = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem 0;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const TempUnit = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 0;
  border-radius: 50%;
  font-family: Raleway;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 6px;
  cursor: pointer;
  background: #585676;
  color: #e7e7eb;
  transition: background 500ms ease;
`;

function WeatherStats({ weather, setUnits }) {
  return (
    <StatsWrapper>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <TempUnit
          id="temp-active"
          onClick={(e) => {
            setUnits(true);
            e.target.id = "temp-active";
            e.target.nextElementSibling.id = "";
          }}
        >
          &#176;C
        </TempUnit>
        <TempUnit
          onClick={(e) => {
            setUnits(false);
            e.target.id = "temp-active";
            e.target.previousElementSibling.id = "";
          }}
        >
          &#176;F
        </TempUnit>
      </div>
      <UpcomingWeather>
        {weather.consolidated_weather.map((weatherState, i) =>
          i ? <WeatherCard key={i} weatherState={weatherState} /> : null
        )}
      </UpcomingWeather>
      <div>
        <h1
          style={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
            color: "#E7E7EB",
            textAlign: "left",
            marginTop: "3rem",
          }}
        >
          Today's Highlights
        </h1>
        <WeatherHighlights>
          <WindStatus
            value={weather.consolidated_weather[0].wind_speed.toPrecision(2)}
            direction={weather.consolidated_weather[0].wind_direction_compass}
            degrees={weather.consolidated_weather[0].wind_direction}
          />
          <Humidity value={weather.consolidated_weather[0].humidity} />
        </WeatherHighlights>
        <WeatherHighlights>
          <Highlight
            title="Visibility"
            value={weather.consolidated_weather[0].visibility.toPrecision(3)}
            unit="miles"
          />
          <Highlight
            title="Air Pressure"
            value={weather.consolidated_weather[0].air_pressure}
            unit="mb"
          />
        </WeatherHighlights>
      </div>
      <Footer />
    </StatsWrapper>
  );
}

export default WeatherStats;
