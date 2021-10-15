import Component from "./Component.js";
import Image from "./Image.js";

const parent = document.querySelector(".list");
const userInput = document.querySelector("#input");
const imgInput = document.querySelector("#inputImg");

document.querySelector(".mybutton").addEventListener("click", () => {
  crearCaja();
});

document.querySelector(".mybuttonImg").addEventListener("click", () => {
  crearImg();
});

function crearCaja() {
  return new Component(parent, "item", userInput.value);
}
function crearImg() {
  return new Image(parent, imgInput.value);
}
