import React from 'react';
import Segments from './Segments';
import Time from './Time';

const Circle = ( { weatherArray } ) => (
  <div className="circle-container">
    <Time />
    <Segments array={weatherArray} />
  </div>
)

export default Circle;