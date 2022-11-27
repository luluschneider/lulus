'use strict';
const canvas = document.getElementById('main_canvas');
const title = document.getElementsByClassName('title')[0];
let down = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

canvas.addEventListener('mousedown', ( e ) => {
  down = true;
  c.beginPath();
});

canvas.addEventListener('mouseup', ( e ) => { down = false; });

canvas.addEventListener('mousemove', ( e ) => {
  if ( down ) {
      c.lineTo( e.clientX, e.clientY );
      c.stroke();
    }
});

title.addEventListener('mousedown', ( e ) => {
  title.remove();
  c.beginPath();
  down = true;
});

title.addEventListener('mouseup', ( e ) => { down = false; })