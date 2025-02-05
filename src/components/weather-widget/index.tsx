import React from "react";
import {
  WeatherContainer,
  WeatherIcon,
  Temperature,
  Description,
  Location,
  AdditionalInfo,
} from "./index.styles";
import { useWeatherQuery } from "@/queries/useWeatherQuery";
import { IWeatherData } from "@/types";
import Spinner from "@/components/design-components/spinner";

const WeatherWidget: React.FC = () => {
  const { data: weather, error, isLoading } = useWeatherQuery();

  if (error) {
    return <WeatherContainer>Error: {String(error)}</WeatherContainer>;
  }

  if (isLoading) {
    return (
      <WeatherContainer>
        <Spinner />
      </WeatherContainer>
    );
  }

  if (!weather) {
    return <WeatherContainer>No weather data available</WeatherContainer>;
  }

  const {
    main,
    weather: weatherDetails,
    sys,
    name,
    wind,
  } = weather as IWeatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <WeatherContainer>
      <WeatherIcon src={iconUrl} alt={weatherDetails[0].description} />
      <Temperature>{(main.temp - 273.15).toFixed(0)}°C</Temperature>
      <Description>{weatherDetails[0].description}</Description>
      <Location>
        {name}, {sys.country}
      </Location>
      <AdditionalInfo>
        <p>Feels like: {(main.feels_like - 273.15).toFixed(0)}°C</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>Humidity: {main.humidity}%</p>
      </AdditionalInfo>
    </WeatherContainer>
  );
};

export default WeatherWidget;
