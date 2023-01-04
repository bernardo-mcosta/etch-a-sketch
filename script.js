const grid = document.querySelector(".grid");
const gridSize = 16; // this parameter will change dynamically later
const gridHeight = 500; // in pixels
const gridWidth = 500;

grid.style.display = "grid";
grid.style.height = `${gridHeight}px`;
grid.style.width = `${gridWidth}px`;
grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

for (i = 0; i < gridSize * gridSize; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  grid.appendChild(div);
}

const squares = document.querySelectorAll(".square");
let color = "black";

const buttonEraser = document.querySelector(".button-eraser");
buttonEraser.addEventListener("click", () => {
  color = "white";
});

const buttonBlack = document.querySelector(".button-black");
buttonBlack.addEventListener("click", () => {
  color = "black";
});

const buttonClear = document.querySelector(".button-clear");
buttonClear.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

const buttonRainbow = document.querySelector(".button-rainbow");
buttonRainbow.addEventListener("click", () => {
  color = getRandomColor();
});

// This three event listeners will allow the coloring effect to happen only when the mouse is both being pressed and dragged

let isDragging = false;
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    isDragging = true;
  });
  square.addEventListener("mousemove", () => {
    if (isDragging) {
      square.style.backgroundColor = color;
    }
  });
  square.addEventListener("mouseup", () => {
    isDragging = false;
  });
  square.addEventListener("dragstart", (event) => {
    event.preventDefault;
  });
});

////

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
