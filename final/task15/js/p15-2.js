"use strict";

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const computerHand = document.querySelector("#computer-hand");
const playerHand = document.querySelector("#player-hand");

const resultCnt = document.querySelector("#result-cnt");

// 画像のURLを配列で定義
const imageLinks = [
  "img/j-choki.png",
  "img/j-gu.png",
  "img/j-pa.png",
]

// 画像を0.1秒ごとに変えさせる関数
function changePicture(picture) {
  picture.timer = setInterval(() => {
    let randNo = Math.floor(Math.random() * imageLinks.length);
    picture.src = imageLinks[randNo];
  }, 1);
}

// 画像の変更が終わったら、それぞれ画像URLを確認し、勝敗を判定する関数
function decideOutcome(computerHand, playerHand) {
  let result;
  if (computerHand.src === playerHand.src) {
    result = "あいこ";
  } else if (computerHand.src.includes("j-choki")) {
    if (playerHand.src.includes("j-gu")) {
      result = "あなたの勝ち";
    } else if (playerHand.src.includes("j-pa")) {
      result = "Computerの勝ち";
    }
  } else if (computerHand.src.includes("j-gu")) {
    if (playerHand.src.includes("j-choki")) {
      result = "Computerの勝ち";
    } else if (playerHand.src.includes("j-pa")) {
      result = "あなたの勝ち";
    }
  } else if (computerHand.src.includes("j-pa")) {
    if (playerHand.src.includes("j-choki")) {
      result = "あなたの勝ち";
    } else if (playerHand.src.includes("j-gu")) {
      result = "Computerの勝ち";
    }
  }
  resultCnt.innerText = result;
  resultCnt.classList.remove("invisible");
}

// ゲームの開始にあたってボタンのdisabled表示を変えて、resultの表示を消す（最初のゲームならすでに消えてある）。そして、各画像の変更を開始する。
function startGame() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resultCnt.classList.add("invisible");
  changePicture(computerHand);
  changePicture(playerHand);
}

// startGameと逆の設定。また、勝負を評価する関数を呼ぶ。
function stopGame() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(computerHand.timer);
  clearInterval(playerHand.timer);
  decideOutcome(computerHand, playerHand);
}

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", stopGame);