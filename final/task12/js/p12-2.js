"use strict";

let c = {x: 0, y: 0, r: 40};
const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");
const btn = document.querySelector("#btn");

function draw() {
  const colours = ["red", "blue", "green", "yellow", "orange", "purple"];
  const circleColour = colours[Math.floor(Math.random() * colours.length)];
  gc.beginPath();
  gc.lineWidth = 2;
  gc.strokeStyle = circleColour;
  gc.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  gc.stroke();
}

btn.addEventListener("click", () => {
  const xVal = Math.floor(Math.random() * ((cv.width - c.r) - (0 + c.r) + 1) + 0 + c.r);
  const yVal = Math.floor(Math.random() * ((cv.height - c.r) - (0 + c.r) + 1) + 0 + c.r);
  c.x = xVal;
  c.y = yVal;
  draw();
});
