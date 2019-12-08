import axios from "axios";
// import iso from 'iso-3166-1';
const API_KEY = 'fd8c321e37d32fe6d680088b56f2e14f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  // @TODO city 의 country code 찾기
  // q city name and country code divided by comma, use ISO 3166 country codes
  const countryCode = 'us';
  // const countryCode = iso.whereCountry(city);
  debugger
  const url = `${ROOT_URL}&q=${city},${countryCode}`;


  let promise  = axios.get(url);
  // console.log('promise:', promise);
  return {
    type: FETCH_WEATHER,
    payload: promise,
  }
}
