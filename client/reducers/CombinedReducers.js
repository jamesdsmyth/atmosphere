import { createStore, combineReducers } from 'redux';
import PopulateWeather from './PopulateWeather';

const reducer = combineReducers({
  weather: PopulateWeather
});

const Store = createStore(reducer);

export default Store;

