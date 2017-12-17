import Store from '../reducers/CombinedReducers';
import populateWeather from '../actions/Actions';

const apiCall = () => {

  // using fetch() to get the weatrher data
  navigator.geolocation.getCurrentPosition(position => {

    let ceilingLat = Math.floor(position.coords.latitude);
    let ceilingLng = Math.floor(position.coords.longitude);
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${ceilingLat}&lon=${ceilingLng},&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77`;

    fetch(url).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error(error);
      }
    }).then(json => {
      Store.dispatch(populateWeather(json));
    }).catch(error => {
      console.log('error');
      alert(error);
    });
  });
}

export default apiCall;