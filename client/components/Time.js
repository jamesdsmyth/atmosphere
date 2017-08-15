import React, { Component } from 'react';
import moment from 'moment';

export default class Time extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  setTime() {
    setInterval(this.getTime.bind(this), 1000);
  }

  getTime() {
    let currentTime = moment(new Date()).format('H:mm');

    this.setState({
      currentTime: currentTime,
      loaded: true
    });
  }

  render() {

    {
      this.state.loaded === false && this.setTime();
    }

    return (
      <time className="time">
        {this.state.currentTime}
      </time>
    )
  }
}