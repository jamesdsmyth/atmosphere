const weather = (state = {}, action) => {

  let toReturn;

  console.log(action.data)

  switch(action.type) {
    case 'POPULATEWEATHER': 
      toReturn = Object.assign({}, action.data);
      console.log(toReturn);
      break;
    
      default: 
      toReturn = state;
  }

  return toReturn;
}

export default weather;