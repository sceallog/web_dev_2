"use strict";

const numberGenerator = document.querySelector("#rand-btn");
const searchButton = document.querySelector("#search-btn");
const showArray = document.querySelector("#array-cnt");
const showResult = document.querySelector("#result-cnt");
let randomNumbers = [];

// 乱数を10個、配列に挿入する
numberGenerator.addEventListener("click", () => {
  randomNumbers = [];

  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  showArray.textContent = `[${randomNumbers.join(", ")}]`;
})

// 配列の中から最小値を検索する
searchButton.addEventListener("click", () => {
  let smallestValue = randomNumbers[0];
  
  for (let i = 1; i < randomNumbers.length; i++) {
    if (smallestValue > randomNumbers[i]) {
      smallestValue = randomNumbers[i];
    }
  }
  showResult.textContent = `最小値： ${smallestValue}`;
});