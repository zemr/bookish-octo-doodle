import React from 'react';
import pattern from '../patterns/pattern1a.png';

const radius = 150, height = 260;

class Hexagon extends React.Component {
  componentDidMount() {
    this.drawParts();
    this.drawGlass();
  }

  drawParts() {
    const ctx = document.getElementById('canvas').getContext('2d');

    const img = document.createElement('img');
    const file = {pattern};
    img.src = file['pattern'];

    img.onload = () => {

      ctx.drawImage(img, .5*radius, .5*height);
      ctx.drawImage(img, .5*radius, 1.5*height);
      ctx.drawImage(img, 2*radius, 0);
      ctx.drawImage(img, 2*radius, height);
      ctx.drawImage(img, 2*radius, 2*height);
      ctx.drawImage(img, 3.5*radius, .5*height);
      ctx.drawImage(img, 3.5*radius, 1.5*height);

      ctx.translate(radius, .5*height);
      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -2.5*height);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, 2.5*radius, -height);

      ctx.rotate(Math.PI/1.5);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.drawImage(img, -3.5*radius, height);

      ctx.rotate(Math.PI/3);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -.5*radius, height);
      ctx.drawImage(img, -.5*radius, 2*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, radius, .5*height);
      ctx.drawImage(img, radius, 1.5*height);
      ctx.drawImage(img, 2.5*radius, 0);
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, -2*radius, -1.5*height);
      ctx.drawImage(img, -2*radius, -.5*height);
      ctx.drawImage(img, -2*radius, .5*height);
      ctx.drawImage(img, -3.5*radius, -height);
      ctx.drawImage(img, -3.5*radius, 0);
      ctx.restore();

      ctx.rotate(Math.PI/1.5);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(img, -.5*radius, -2*height);
      ctx.drawImage(img, -.5*radius, -height);
      ctx.drawImage(img, -.5*radius, 0);
      ctx.drawImage(img, radius, -1.5*height);
      ctx.drawImage(img, radius, -.5*height);
      ctx.drawImage(img, 2.5*radius, -2*height);
      ctx.drawImage(img, 2.5*radius, -height);
      ctx.restore();

    };
  }

  drawGlass() {
    const context = document.getElementById('canvasG').getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 4.4*radius, 2.5*height);
    context.globalCompositeOperation = "destination-out";
    context.arc(1.25*height, 1.25*height, 1.25*height, 0, 2*Math.PI);
    context.fill();
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <canvas id="canvas" width={4.4*radius} height={2.5*height} style={{position: 'absolute'}}/>
        <canvas id="canvasG" width={4.4*radius} height={2.5*height} style={{position: 'absolute'}}/>
      </div>
    );
  }
}

export default Hexagon;