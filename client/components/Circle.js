import React, { Component } from 'react';
import { connect } from 'react-redux'
import apiCall from '../api/Api';

var b = apiCall();

console.log(b);

class Circle extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="circle">
        <ul className="segments">
          {
            [...Array(24)].map((x, i) => {
            const newClass = `segment s-${i}`;
            return <li className={newClass} key={i}></li>
          })
        }
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

Circle = connect(mapStateToProps)(Circle);

export default Circle;