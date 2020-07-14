import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "./Main";

const Card = styled.div`
  margin: 1rem 12px;
  display: flex;
  flex-direction: column;
  padding: 18px 10px;
  font-family: Raleway;
  text-align: center;
  color: #e7e7eb;
  width: 120px;
  background: #1e213a;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  p {
    display: inline-block;
    font-family: Raleway;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #e7e7eb;
  }
`;

function WeatherCard({ weatherState }) {
  const { celcius, convertToFahrenheit } = useContext(WeatherContext);
  let dt = new Date(weatherState.applicable_date).toUTCString();
  return (
    <Card>
      <h1>{dt.slice(0, 11)}</h1>
      <div style={{ height: "4rem", margin: "10px" }}>
        <img
          src={require(`../images/${weatherState.weather_state_name
            .split(" ")
            .join("")}.png`)}
          alt="weather-state"
          height="100%"
          style={{ marginLeft: "-10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <p>
          {celcius ? (
            <>{weatherState.max_temp.toPrecision(2)}&#176;C</>
          ) : (
            <>
              {convertToFahrenheit(weatherState.max_temp.toPrecision(2))}&#176;F
            </>
          )}
        </p>
        <p>
          {celcius ? (
            <>{weatherState.min_temp.toPrecision(2)}&#176;C</>
          ) : (
            <>
              {convertToFahrenheit(weatherState.min_temp.toPrecision(2))}&#176;F
            </>
          )}
        </p>
      </div>
    </Card>
  );
}

export default WeatherCard;
