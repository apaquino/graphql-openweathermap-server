import axios from 'axios';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

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
                      temp,
                      pressure,
                      humidity
                    }
                  }
                }
              }
              `
            })
            .then(function (response) {
              dispatch(receiveWeather(response.data.data.weatherForecast))
            })
  };
}
