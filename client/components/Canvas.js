import React, { Component } from 'react';
import colorSelection from '../misc/colors';
import moment from 'moment';

export default class Canvas extends Component {

  // firstly we get the time of the current weather period -  example 0900 - 1200.
  // we this get the difference in minutes of the current time and the time elapsed. example 50 minutes
  // 45 / 180 is 45 is the segment degrees width and 180 is each minute in the segment. 
  // 90 + the degrees is centering the canvas so the first segment is up the time, then we add
  // on the time elapsed and * -1 to make it a minus number. We then rotate the canvas
  rotateCanvas() {
    let b = moment(new Date().getTime()).diff(moment(this.props.weatherArray[0].dt_txt))
    let e = moment.duration(b);
    let minutesPast = Math.floor(e.asSeconds() / 60);
    let degrees = (45/180) * minutesPast;
    let trueDegrees = (90 + degrees) * -1;

    canvas.style.transform = `rotate(${trueDegrees}deg)`;
    canvas.style.webkitTransform = `rotate(${trueDegrees}deg)`;
    canvas.style.mozTransform = `rotate(${trueDegrees}deg)`;
  }

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

    this.props.weatherArray[0] !== undefined && this.rotateCanvas();

    return (
      <div className="canvas-container">
        <span className="line"></span>
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}
