import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import weather from './PopulateWeather';

const reducer = combineReducers({
  weather
});

const Store = createStore(reducer,
  applyMiddleware(logger)
);

export default Store;