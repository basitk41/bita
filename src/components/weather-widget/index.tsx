import React, { useEffect, useState } from "react";
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
import InputField from "@/components/design-components/input";
import { getGeoCode } from "@/models/geocode.model";
import Button from "@/components/design-components/button";
import { IGeoCoordsProps } from "@/types";

const WeatherWidget: React.FC = () => {
  const [coords, setCoords] = useState<IGeoCoordsProps>({
    latitude: 0,
    longitude: 0,
  });
  const [location, setLocation] = useState<string>("");
  const { data: weather, error, isLoading, refetch } = useWeatherQuery(coords);

  const fetchLocation = async () => {
    const { items } = await getGeoCode(location);
    setCoords({
      latitude: items[0].position.lat,
      longitude: items[0].position.lng,
    });
  };

  useEffect(() => {
    if (coords.latitude && coords.longitude) refetch();
  }, [refetch, coords]);

  if (error) {
    return (
      <WeatherContainer>
        <p>Allow location permission to get weather information.</p>
        OR
        <InputField
          name="city"
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter city name"
          value={location}
        />
        <Button onClick={fetchLocation}>Get Weather</Button>
      </WeatherContainer>
    );
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
