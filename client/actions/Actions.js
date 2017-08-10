const populateWeather = (data) => {
  console.log({
    type: 'POPULATEWEATHER',
    data
  });
  return {
    type: 'POPULATEWEATHER',
    data
  }
}

export default populateWeather;