import { REQUEST_WEATHER, RECEIVE_WEATHER, CLEAR_WEATHER, DELETE_CITY } from '../actions/index';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  isLoading: false,
  cities: Immutable.List()
});

function weather(state = initialState, action) {
  switch (action.type) {
  case REQUEST_WEATHER:
    return state.set('isLoading', true);
  case RECEIVE_WEATHER:
    return state.set('isLoading', false)
                .set('cities', state.get('cities').unshift(action.city));
  case CLEAR_WEATHER:
    return state.set('cities', state.get('cities').clear());
  case DELETE_CITY:
    const cityId = state.get('cities')
                        .findIndex(cityEl => cityEl.city.id === action.id );
    return state.set('cities', state.get('cities').delete(cityId));
  default:
    return state;
  }
}

export default weather;
