"use strict";

// dt要素を全て取得し、クリックイベントを登録。クリックの際に、そのdtの一つ後の要素、
// ddにshowクラスを追加したり、削除したりする。

const dts = document.querySelectorAll("dt");

dts.forEach(dt => {
  dt.addEventListener("click", () => {
    dt.nextElementSibling.classList.toggle("show");
  });
});