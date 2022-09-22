let btn = document.querySelectorAll("button:not(.eq,.clear)");
let tbox = document.querySelector("input");
let eq = document.querySelector(".eq");
let clear = document.querySelector(".clear");
btn.forEach((ele) => {
  ele.addEventListener("click", () => {
    tbox.value = tbox.value + ele.textContent;
  });
});
clear.addEventListener("click", () => {
  tbox.value = "";
});
eq.addEventListener("click", () => {
  tbox.value = eval(tbox.value);
});
