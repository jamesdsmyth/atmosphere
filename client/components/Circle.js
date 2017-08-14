import React from 'react';
import Segments from './Segments';
import Canvas from './Canvas';
import Time from './Time';

const Circle = ( { weatherArray } ) => (
  <div className="circle-container">
    {/* <Time /> */}
    <Segments weatherArray={weatherArray} />
    <Canvas weatherArray={weatherArray} />
  </div>
)

export default Circle;