import { useQuery } from "react-query";
import { getWeather } from "@/models/weather.model";

export function useWeatherQuery() {
  return useQuery(
    ["weather"],
    async () => {
      return new Promise<GeolocationCoordinates>((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (err) => reject(err)
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      }).then((coords) => getWeather(coords.latitude, coords.longitude));
    },
    {
      enabled: true,
      staleTime: 1000 * 60 * 5,
      retry: 1,
    }
  );
}
