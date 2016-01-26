import axios from 'axios';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';

export function requestWeather(term) {
  return {
    type: REQUEST_WEATHER,
    term
  };
}

export function receiveWeather(city) {
  return {
    type: RECEIVE_WEATHER,
    city
  };
}

export function clearWeather() {
  return {
    type: CLEAR_WEATHER
  };
}

export function deleteCity(id) {
  return {
    type: DELETE_CITY,
    id
  };
}

export function fetchWeather(term) {
  return dispatch => {
    dispatch(requestWeather(term));
    return axios.post('/graphql', {
              query: `
                {
                  weatherForecast(city:"${term}") {
                    city {
                      id,
                      name,
                      coord{
                        lat,
                        lng: lon
                      }
                    },
                    pressure_data,
                    humidity_data,
                    temp_f_data,
                    temp_f_avg,
                    pressure_avg,
                    humidity_avg,
                  }
                }
                `
            })
            .then( response => {
              // response from axios comes with data object and so does graphql
              dispatch(receiveWeather(response.data.data.weatherForecast));
            });
  };
}
