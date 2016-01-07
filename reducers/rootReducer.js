import { combineReducers } from 'redux';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  weather
});

export default rootReducer;
