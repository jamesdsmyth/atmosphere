import React, { Component } from 'react';

export default class Canvas extends Component {

  render() {

    let canvas = document.getElementById('canvas');

    if(canvas) {

      let w = 600;
      let h = 600;
      let radian = 0.785398;

      canvas.width = w * 2;
      canvas.height = h * 2;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      let ctx = canvas.getContext('2d');
      ctx.scale(2,2);

      this.props.weatherArray.map((x, i) => {
        ctx.beginPath();
        ctx.moveTo(300,300);
        ctx.fillStyle='rgb(' + Math.floor(255-42.5*i) + ', 95, 180)';
        ctx.arc(300, 300, 150, (i * radian), ((i + 1) * radian), false);
        ctx.closePath();
        ctx.fill(); 
      });
    }

    return (
      <canvas id="canvas"></canvas>
    )
  }
}
