"use strict";
// 選択した文字列を表示する部分を変数に代入
const display = document.querySelector("#output-cnt");

// ---------------------------------------
// 文字チェックボックスのイベントリスナーを設定
const textCheckboxes = document.querySelectorAll("#checkbox-cnt input")
let result = [];

// 文字を選択したら追加、選択解除したら削除する
textCheckboxes.forEach(checkbox =>{
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        result.push(event.target.value);
      } else {
        result = result.filter(value => value !== event.target.value);
      }
      display.textContent = result.join("");
    })
})

// ---------------------------------------
// 文字列の大きさを変更する
const fontSize = document.querySelector("#font-select");
fontSize.addEventListener("change", (event) => {
    display.style.fontSize = event.target.value + "px";
})

// ---------------------------------------
// 文字列のフォントを変更する
const fontFamily = document.querySelectorAll("input[name='font-family']");
let setFont = "";

fontFamily.forEach(font => {
  font.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "sans-serif":
      setFont = "Roboto, Helvetica, sans-serif";
      break;
    case "serif":
      setFont = "'Noto Serif', 'Times New Roman', serif";
      break;
    case "fantasy":
      setFont = "'MedievalSharp', cursive";
      break;
    case "cursive":
      setFont = "'Alex Brush', cursive";
      break;
    case "monospace":
      setFont = "Ubuntu Mono, Courier New, monospace";
      break;
    default:
      setFont = "Arial, Helvetica, sans-serif";
      break;
  }
  display.style.fontFamily = setFont;
  })
});

// ---------------------------------------
// 文字列の色を変更する
const fontColor = document.querySelector("#font-colour-picker");
fontColor.addEventListener("change", (event) => {
    display.style.color = event.target.value;
})