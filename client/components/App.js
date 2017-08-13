import React, { Component } from 'react';
import { connect } from 'react-redux';
import Circle from './Circle';
import apiCall from '../api/Api';

apiCall();

class Initial extends Component {
  render() {
    
    let weatherArray = this.props.weather.list != null ? this.props.weather.list.splice(0,8) : [];
    
    return (
      <Circle weatherArray={weatherArray} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

Initial = connect(mapStateToProps)(Initial);

export default Initial;