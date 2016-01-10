import { REQUEST_WEATHER, RECEIVE_WEATHER, CLEAR_WEATHER, DELETE_CITY } from '../actions/index';
import Immutable from 'immutable';

const initialState = {
  isLoading: false,
  cities: Immutable.List()
};

function weather(state = initialState, action) {
  switch (action.type) {
  case REQUEST_WEATHER:
    return Object.assign({}, state, {
      isLoading: true
    });
  case RECEIVE_WEATHER:
    return Object.assign({}, state, {
      isLoading: false,
      cities: state.cities.unshift(action.city)
    });
  case CLEAR_WEATHER:
    return Object.assign({}, state, {
      isLoading: false,
      cities: state.cities.clear()
    });
  case DELETE_CITY:
    const cityId = state.cities.findIndex(cityWeather => cityWeather.city.id === action.id );

    return Object.assign({}, state, {
      cities: state.cities.delete(cityId)
    });
  default:
    return state;
  }
}

export default weather;
