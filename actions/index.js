import axios from 'axios';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';

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
                  list {
                    main {
                      temp_f,
                      pressure,
                      humidity
                    }
                  }
                }
              }
              `
            })
            .then( response => {
              dispatch(receiveWeather(response.data.data.weatherForecast));
            });
  };
}
