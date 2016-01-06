import axios from 'axios';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function requestWeather(term) {
  return {
    type: REQUEST_WEATHER,
    term
  };
}

export function receiveWeather(weather) {
  return {
    type: RECEIVE_WEATHER,
    weather
  };
}

export function fetchWeather(term) {

  return dispatch => {
    dispatch(requestWeather(term));
    return axios.post('/graphql', {
              query: `
              {
                weatherForecast(city:"${term}") {
              		cod,
                  message,
                  cnt
                }
              }
              `
            })
            .then(function (response) {
              console.log(response.data);
              dispatch(receiveWeather(response.data))
            })
  };
}
