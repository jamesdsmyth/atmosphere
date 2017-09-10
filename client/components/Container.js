import React from 'react';
import Segments from './Segments';
import Canvas from './Canvas';
import Loading from './Loading';

const Container = ( { weatherArray } ) => (
  <div>
    {
      weatherArray.length > 0 ?
      <div className="container">
        <Segments weatherArray={weatherArray} />
        <Canvas weatherArray={weatherArray} />
      </div>
    :
      <div className="container">
        <Loading />
      </div>
    }
  </div>
)

export default Container;