import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircleContainer from './CircleContainer';
import apiCall from '../api/Api';

class Initial extends Component {

  render() {
    apiCall();
    
    let weatherArray = this.props.weather.list != null ? this.props.weather.list.splice(0,8) : [];

    return (
      <CircleContainer weatherArray={weatherArray} />
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