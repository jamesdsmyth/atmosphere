import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Circle from './Circle';
import apiCall from '../api/Api';

apiCall();

class Initial extends Component {
  render() {
    
    let weatherArray = this.props.weather.list != null ? this.props.weather.list.splice(0,8) : [];
    let day = moment.unix(1502442000).format("HH:MM:SS DD/MM/YYYY");
    console.log(day);

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