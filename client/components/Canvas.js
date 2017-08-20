import React, { Component } from 'react';
import colorSelection from '../misc/colors';
import rotateCanvas from '../misc/rotateCanvas';

export default class Canvas extends Component {
  
  buildSegments() {
    let w = 600;
    let h = 600;
    let radian = 0.785398; // 45 deg = 8 segments

    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    let ctx = canvas.getContext('2d');
    ctx.scale(2,2);
    ctx.save();

    // ctx.arc(x, y, radius, startAngle in radian, endAngle in radian, anticlockwise)
    // this loops through the 8 items in the array
    this.props.weatherArray.map((x, i) => {
      let temperature = Math.round(x.main.temp - 273.15);
      let color = colorSelection(temperature);

      ctx.beginPath();
      ctx.moveTo(300,300);
      ctx.arc(300, 300, 300, (i * radian), ((i + 1) * radian), false);
      ctx.closePath();
      ctx.fillStyle=`${color}`;
      ctx.fill();
      ctx.save();
    });
  }

  render() {

    let canvas = document.getElementById('canvas');

    canvas && this.buildSegments();

    this.props.weatherArray[0] !== undefined && rotateCanvas(this.props.weatherArray[0].dt_txt);

    return (
      <div className="canvas-container">
        <span className="clock-line"></span>
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}
