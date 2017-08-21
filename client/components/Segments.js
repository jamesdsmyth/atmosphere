import React from 'react';
import Segment from './Segment';
import Time from './Time';

const Segments = ( {weatherArray} ) => (
  <div className="circle-container">
    <span className="clock-line"></span>
    <Time />
    <ul id="segments">
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

export default Segments;