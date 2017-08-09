const PopulateWeather = (state = {}, action) => {

  let toReturn;

  switch(action.type) {
    case 'POPULATEWEATHER': 

      toReturn = Object.assign({}, state, action.data);
    default: 
      toReturn = state;
  }

  return toReturn;
}

export default PopulateWeather;