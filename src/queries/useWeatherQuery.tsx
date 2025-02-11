import { useQuery } from "react-query";
import { getWeather } from "@/models/weather.model";
import { IGeoCoordsProps } from "@/types";

export function useWeatherQuery(userCoords: IGeoCoordsProps) {
  return useQuery(
    ["weather"],
    async () => {
      return new Promise<IGeoCoordsProps>((resolve, reject) => {
        if (userCoords?.latitude && userCoords?.longitude) {
          return resolve(userCoords);
        } else if (navigator.geolocation) {
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
      retry: 0,
    }
  );
}
