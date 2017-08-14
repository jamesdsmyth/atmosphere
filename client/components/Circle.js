import React from 'react';
import Segments from './Segments';
import Canvas from './Canvas';
import Time from './Time';

const Circle = ( { weatherArray } ) => (
  <div className="circle-container">
    {/* <Time /> */}
    {/* <Segments array={weatherArray} /> */}
    <Canvas />
  </div>
)

export default Circle;