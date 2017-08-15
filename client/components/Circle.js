import React from 'react';
import Segments from './Segments';
import Canvas from './Canvas';

const Circle = ( { weatherArray } ) => (
  <div className="circle-container">
    <Segments weatherArray={weatherArray} />
    <Canvas weatherArray={weatherArray} />
  </div>
)

export default Circle;