import axios from 'axios';

const API_KEY = 'baa6557c600322fc427e71fa847e4474';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;
  const request = axios.get(url);

  return {
    type    : FETCH_WEATHER,
    payload : request,
  };
}
