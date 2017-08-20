import React from 'react';
import Segments from './Segments';
import Canvas from './Canvas';
import Loading from './Loading';

const CircleContainer = ( { weatherArray } ) => (
  <div>
    {
      weatherArray.length > 0 ?
      <div className="circle-container">
        <Segments weatherArray={weatherArray} />
        <Canvas weatherArray={weatherArray} />
      </div>
    :
      <div className="circle-container">
        <Loading />
      </div>
    }
  </div>
)

export default CircleContainer;