import Store from '../reducers/CombinedReducers';
import populateWeather from '../actions/Actions'; 

const apiCall = () => {

  const call = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {

        let ceilingLat = Math.floor(position.coords.latitude);
        let ceilingLng = Math.floor(position.coords.longitude);
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${ceilingLat}&lon=${ceilingLng},&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77`;

        fetch(url).then((response) => {
          return response.json();
        }).then((json) => {
          resolve(json);
        }).catch((error) => {
          reject(error);
        });
      });
    });
  }

  call().then((response) => {
    Store.dispatch(populateWeather(response));
  }, (error) => {
    alert(error);
  });
}

export default apiCall;

// promise here tht resolves if the url is correct.
// call() takes two arguments which is a resolve or a reject function.
// within call() we have a promie that takes both these arguments
// we use fetch to call the api and depending on that we call resolve or reject