"use strict";

const body = document.getElementById("body");
 

function switchLogo() {
  if (body.classList.contains('bg-white')) {
    // console.log("whiteBK");
    document.getElementById("logo").src = "./img/navbar/dark.svg";
  } else if (body.classList.contains('bg-dark')) {
    document.getElementById("logo").src = "./img/navbar/light.svg";
  }
}
switchLogo();