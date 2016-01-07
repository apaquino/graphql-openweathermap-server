import {REQUEST_WEATHER, RECEIVE_WEATHER} from '../actions/index';

const initialState = {
  isLoading: false,
  cities:[]
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
      cities: [action.city, ...state.cities]
    });
  default:
    return state;
  }
}

export default weather;
