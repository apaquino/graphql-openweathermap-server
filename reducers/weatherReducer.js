import {REQUEST_WEATHER, RECEIVE_WEATHER} from '../actions/index';

const initialState = {
  isLoading: false,
  weather:[]
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
      weather: action.weather
    });
  default:
    return state;
  }
}

export default weather;
