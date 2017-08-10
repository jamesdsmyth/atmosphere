import { createStore, combineReducers } from 'redux';
import weather from './PopulateWeather';

const reducer = combineReducers({
  weather
});

const Store = createStore(reducer);

export default Store;

