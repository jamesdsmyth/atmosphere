import moment from 'moment';

// firstly we get the time of the current weather period -  example 0900 - 1200.
// we this get the difference in minutes of the current time and the time elapsed. example 50 minutes
// 45 / 180 is 45 is the segment degrees width and 180 is each minute in the segment. 
// 90 + the degrees is centering the canvas so the first segment is up the time, then we add
// on the time elapsed and * -1 to make it a minus number. We then rotate the canvas

const rotateCanvas = (time) => {
  let segments = document.getElementById('segments'); // left hand side circle
  let canvas = document.getElementById('canvas'); // right hand side circle
  
  let b = moment(new Date().getTime()).diff(moment(time))
  let e = moment.duration(b);
  let minutesPast = Math.floor(e.asSeconds() / 60);
  let degrees = (45/180) * minutesPast;
  let trueDegrees = (90 + degrees) * -1;

  canvas.style.transform = `rotate(${trueDegrees}deg)`;
  canvas.style.webkitTransform = `rotate(${trueDegrees}deg)`;
  canvas.style.mozTransform = `rotate(${trueDegrees}deg)`;
  segments.style.transform = `rotate(${trueDegrees}deg)`;
  segments.style.webkitTransform = `rotate(${trueDegrees}deg)`;
  segments.style.mozTransform = `rotate(${trueDegrees}deg)`;
}

export default rotateCanvas;