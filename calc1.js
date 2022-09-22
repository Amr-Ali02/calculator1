let btn = document.querySelectorAll("button:not(.eq,.clear,.lt)");
let tbox = document.querySelector("input");
let eq = document.querySelector(".eq");
let clear = document.querySelector(".clear");
let lt = document.querySelector(".lt");
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
lt.addEventListener("click", () => {
  let tv = tbox.value.toString().slice(0, -1);
  tv.slice(0, -1);
  tbox.value = tv;
  // for (let i = 0; i < tv.length; i++) {}
});
