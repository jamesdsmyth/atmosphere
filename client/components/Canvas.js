import React, { Component } from 'react';

export default class Canvas extends Component {

  color(t) {
    let color = null;


    // $blue: #2f358f; // 0 -5
    // $light-blue: #0a56a2; // 6 - 10
    // $light-green: #1aa79d; // 11 - 15
    // $green: #17a456; // 16 - 20
    // $yellow: #fef036; // 21 - 25
    // $light-orange: #fec42e; // 26 - 30
    // $orange: #fd9326; // 31 - 35
    // $dark-orange: #f16631; // 36 - 40
    // $red: #eb212f; // 41 - 50

    console.log(t);

    switch(true) {
      case t < 5:
        color = '#2f358f';
        break;
      
      case t <= 10:
        color = '#0a56a2';
        break;

      case t <= 15:
        color = '#1aa79d';
        break;

      case t <= 20:
        color = '#17a456';
        break;

      case t <= 25:
        color = '#fef036';
        break;

      case t <= 30:
        color = '#fec42e';
        break;

      case t <= 35:
        color = '#fd9326';
        break;

      case t <= 40:
        color = '#f16631';
        break;

      case t <= 55:
        color = '#eb212f';
        break;

      default: 
        color = '#ffffff';
    }

    return color;
  }

  render() {

    let canvas = document.getElementById('canvas');

    if(canvas) {

      let w = 600;
      let h = 600;
      let radian = 0.785398; // 45 deg

      canvas.width = w * 2;
      canvas.height = h * 2;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      let ctx = canvas.getContext('2d');
      ctx.scale(2,2);

      // ctx.arc(x, y, radius, startAngle in radian, endAngle in radian, anticlockwise);

      // this loops through the 8 items in the array
      this.props.weatherArray.map((x, i) => {
        let temperature = Math.round(x.main.temp - 273.15);

        temperature = parseInt(temperature);
        let color = this.color(temperature);
        ctx.beginPath();
        ctx.moveTo(300,300);
        ctx.arc(300, 300, 300, (i * radian), ((i + 1) * radian), false);
        ctx.closePath();
        ctx.fillStyle=`${color}`;
        ctx.fill(); 
      });
    }

    return (
      <canvas id="canvas"></canvas>
    )
  }
}
