"use strict";

const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");
let c = {x: cv.width / 2, y: cv.height / 2, r: 30};
let timerId;

const radius = c.r;

function draw() {
  if(c.x + radius > cv.width) c.x = cv.width - radius;
  if(c.x - radius < 0) c.x = radius;  
  if(c.y + radius > cv.height) c.y = cv.height - radius;
  if(c.y - radius < 0) c.y = radius;

  gc.clearRect(0, 0, cv.width, cv.height);
  gc.beginPath();
  gc.lineWidth = 2;
  gc.strokeStyle = "green";
  gc.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  gc.stroke();
}

// 最初に画面に縁を描く。
draw();

// 画面上の全てのボタンン要素をNodeListとして取得し、それを繰り返し、各ボタンにクリックイベントを登録。ボタンのidによってイベントの内容を調整。
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("mousedown", () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
      switch(button.id) {
        case "u": c.y -= 1; break;
        case "d": c.y += 1; break;
        case "l": c.x -= 1; break;
        case "r": c.x += 1; break;
        case "lu": c.x -= 1; c.y -= 1; break;
        case "ru": c.x += 1; c.y -= 1; break;
        case "ld": c.x -= 1; c.y += 1; break;
        case "rd": c.x += 1; c.y += 1; break;
        case "reset": c.x = cv.width / 2; c.y = cv.height / 2; break;
      }
      draw();
    }, 1);
    button.classList.add("pressed");
  });

  button.addEventListener("mouseup", () => {
    clearInterval(timerId);
    button.classList.remove("pressed");
  });
});