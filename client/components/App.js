import React, { Component } from 'react';

export default class Initial extends Component {

  apiCall() {
    
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,&mode=json&appid=fb161b8bdfd1a946ed269b0b2cf42b77').then((response) => {
        return response.json();
      }).then((json) => {
        console.log(json);
      });
    });
  }

  render() {
    this.apiCall();
    return (
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
  }
}
