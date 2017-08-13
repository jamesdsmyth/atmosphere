import Store from '../reducers/CombinedReducers';
import populateWeather from '../actions/Actions';

const apiCall = () => {
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=Dubai,&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(populateWeather);
    Store.dispatch(populateWeather(json));
  }).catch((error) => {
    console.log(error);
  });
}

export default apiCall;