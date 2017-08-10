import React from 'react';
import { connect } from 'react-redux';
import Segment from './Segment';

const Circle = ( { weatherArray } ) => (
  <div className="circle">
    <ul className="segments">
      {    
        weatherArray.map((x, i) => {
          let newClass = `segment s-${i}`;
          let temperature = Math.round(x.main.temp - 273.15);
          return <Segment newClass={newClass} temperature={temperature} key={i} />
        })
      }
    </ul>
  </div>
)

export default Circle;