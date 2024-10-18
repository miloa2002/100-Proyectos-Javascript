const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "coral", "lime", "indigo", "violet", "cyan", "magenta", "navy", "gold", "brown", "gray", "black", "white"];
const container = document.querySelector(".container");

const btn = document.querySelector(".btn");
btn.addEventListener("click", changeBackground);

function changeBackground() {
    let random = Math.floor(Math.random()*colors.length);
    container.style.backgroundColor = colors[random]
};