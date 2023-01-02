const grid = document.querySelector(".container");
const gridSize = 16;
const gridHeight = 500;
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
