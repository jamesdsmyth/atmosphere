import React, { Component } from 'react';

export default class Canvas extends Component {

  draw() {
    let canvas = document.getElementById('canvas');
    let w = 300;
    let h = 300;

    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    let ctx = canvas.getContext('2d')
    
    ctx.scale(2,2);

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(195, 0);
    ctx.lineTo(105, 0);
    ctx.fill();
    ctx.closePath();
  }

  componentDidMount() {
    this.draw();
  }

  render() {

    return (
      <canvas id="canvas"></canvas>
    )
  }
}
