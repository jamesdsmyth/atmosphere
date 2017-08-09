import React, { Component } from 'react';
import apiCall from '../api/Api';

var b = apiCall();

console.log(b);

const Circle = () => (
  <div className="circle">
    <ul className="segments">
      {
        [...Array(24)].map((x, i) => {
          const newClass = `segment s-${i}`;
          return <li className={newClass} key={i}></li>
        })
      }
    </ul>
  </div>
)

export default Circle;