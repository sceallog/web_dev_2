"use strict";

// ---------------------------------------
// ① li要素をquerySelectorAllで取得し、繰り返しにてイベントリスナーを設定
const firstListElements = document.querySelectorAll("#first li");

firstListElements.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ---------------------------------------
// ② ul要素を用い、イベントオブジェクトによる操作
const secondList = document.querySelector("#second");
secondList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("active");
  }
});