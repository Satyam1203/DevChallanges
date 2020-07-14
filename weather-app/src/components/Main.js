import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import WeatherToday from "./WeatherToday";
import WeatherStats from "./WeatherStats";
import styled from "styled-components";

export const WeatherContext = React.createContext();

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 4fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

function Main() {
  const [celcius, setUnits] = useState(true);
  const [loading, setLoading] = useState(true);
  const [weather, setweather] = useState([]);
  const [locations, setLocations] = useState([]);

  const getWeather = (locId) => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locId}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setweather(data);
        setLoading(false);
      })
      .catch(console.error);
  };

  const getLocId = (loc) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${loc}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather("2295420");
  }, []);

  const convertToFahrenheit = (celcius) => {
    return ((parseFloat(celcius) * 9) / 5 + 32).toPrecision(3);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MainWrapper>
          <WeatherContext.Provider
            value={{
              celcius,
              locations,
              getLocId,
              getWeather,
              convertToFahrenheit,
            }}
          >
            <WeatherToday weather={weather} />
            <WeatherStats weather={weather} setUnits={setUnits} />
          </WeatherContext.Provider>
        </MainWrapper>
      )}
    </>
  );
}

export default Main;
