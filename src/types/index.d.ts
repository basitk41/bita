export interface ITodo {
  id: number;
  text: string;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export interface IRandomUserAPIResponse {
  results: User[];
  info: Info;
}

interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
}

interface Name {
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
