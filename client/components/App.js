import React, { Component } from 'react';

export default class Initial extends Component {
  render() {
    return (
      <div className="circle">
        <ul>    
          {
            [...Array(24)].map((x, i) => {
              const newClass = `segment s-${i}`;
              return <li className={newClass} key={i}></li>
            })
          }
        </ul>
      </div>
    )
  }
}
