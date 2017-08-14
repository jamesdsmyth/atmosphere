import React from 'react';
import Segment from './Segment';

const Segments = ( {weatherArray} ) => (
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

export default Segments;