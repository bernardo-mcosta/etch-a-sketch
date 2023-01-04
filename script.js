const grid = document.querySelector(".container");
const gridSize = 16; // this parameter will change dynamically later
const gridHeight = 500; // in pixels
const gridWidth = 500;

function createGrid(gridSize) {
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
}

createGrid(gridSize);

let color = "black";

// This three event listeners will allow the coloring effect to happen only when the mouse is both being pressed and dragged
const squares = document.querySelectorAll(".square");
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
});
