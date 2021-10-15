import Component from "./Component.js";

parent = document.querySelector(".list");

document.querySelector(".mybutton").addEventListener("click", () => {
  crearCaja();
});

function crearCaja() {
  return new Component(parent, "item", "li");
}
