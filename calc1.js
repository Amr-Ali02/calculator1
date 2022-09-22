let btn = document.querySelectorAll("button:not(.eq,.clear,.lt)");
let tbox = document.querySelector("#input");
let eq = document.querySelector(".eq");
let clear = document.querySelector(".clear");
let lt = document.querySelector(".lt");
let dis = document.querySelector("input:disabled");
btn.forEach((ele) => {
  ele.addEventListener("click", () => {
    tbox.value = tbox.value + ele.textContent;
    dis.value = eval(tbox.value);
  });
});
clear.addEventListener("click", () => {
  tbox.value = "";
  dis.value = "";
});
eq.addEventListener("click", () => {
  dis.value = eval(tbox.value);
});
tbox.addEventListener("input", () => {
  dis.value = eval(tbox.value);
});
lt.addEventListener("click", () => {
  let tv = tbox.value.toString().slice(0, -1);
  tv.slice(0, -1);
  tbox.value = tv;
});
if (dis.value === "undefined") dis.value = "";
