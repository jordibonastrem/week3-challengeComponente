import Component from "./Component.js";

const parent = document.querySelector(".list");
const userInput = document.querySelector("#input");

document.querySelector(".mybutton").addEventListener("click", () => {
  crearCaja();
});

function crearCaja() {
  console.log(userInput.value);
  return new Component(parent, "item", userInput.value);
}
