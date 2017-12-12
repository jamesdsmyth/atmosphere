import Store from '../reducers/CombinedReducers';
import populateWeather from '../actions/Actions'; 

const apiCall = () => {

  const callPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {

      let ceilingLat = Math.floor(position.coords.latitude);
      let ceilingLng = Math.floor(position.coords.longitude);
      let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${ceilingLat}&lon=${ceilingLng},&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77`;

      fetch(url).then(response => {
        return response.json();
      }).then(json => {
        resolve(json);
      }).catch(error => {
        reject(error);
      });
    });
  }); 
  
  // callPromise is the promise thar if resolved/rejected when deal with it below
  callPromise.then(response => {
    Store.dispatch(populateWeather(response));
  }, (error) => {
    alert(error);
  });
}

export default apiCall;