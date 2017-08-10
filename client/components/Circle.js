import React from 'react';
import { connect } from 'react-redux';

const Circle = ( {weatherArray} ) => (
  <div className="circle">
    <ul className="segments">
      {    
        weatherArray.map((x, i) => {
          const newClass = `segment s-${i}`;
          return <li className={newClass} key={i}></li>
        })
      }
    </ul>
  </div>
)

export default Circle;