import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  time() {
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
      this.state.loaded === false && this.time();
    }

    return (
      <time className="time">
        {this.state.currentTime}
      </time>
    )
  }
}