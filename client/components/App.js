import React, { Component } from 'react';
import Circle from './Circle';

export default class Initial extends Component {
  apiCall() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77').then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    this.apiCall();
    return (
      <Circle />
    )
  }
}