import 'babel-polyfill'; // we need this for async await
import Store from '../reducers/CombinedReducers';
import populateWeather from '../actions/Actions';

const apiCall = () => {

  // using fetch() to get the weatrher data
  navigator.geolocation.getCurrentPosition(position => {

    let ceilingLat = Math.floor(position.coords.latitude);
    let ceilingLng = Math.floor(position.coords.longitude);
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${ceilingLat}&lon=${ceilingLng},&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77`;


    // using async to wrap the await methods.
    // we call apiRequest async function, within this we use the fetch api
    // we await until it returns a promise, we then await until the json has
    // been parsed. Then once that is done we dispatch an action.
    const apiRequest = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        Store.dispatch(populateWeather(json));
      
      } catch(error) {
        console.log('error');
      }
    }

    apiRequest();
  });
}

export default apiCall;