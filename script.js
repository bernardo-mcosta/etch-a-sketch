//// Initialization

let squares;
let color = "black";
const grid = document.querySelector(".grid");
generateGrid(16);

grid.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

//// Button behavior

let rainbowMode = false;

const buttonEraser = document.querySelector(".button-eraser");
buttonEraser.addEventListener("click", () => {
  color = "white";
  rainbowMode = false;
});

const buttonBlack = document.querySelector(".button-black");
buttonBlack.addEventListener("click", () => {
  color = "black";
  rainbowMode = false;
});

const buttonClear = document.querySelector(".button-clear");
buttonClear.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

const buttonRainbow = document.querySelector(".button-rainbow");
buttonRainbow.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  buttonRainbow.classList.toggle("clicked");
});

const colorPicker = document.querySelector(".color-picker");
colorPicker.addEventListener("change", (event) => {
  color = event.target.value;
  console.log(color);
});

///// Slider behavior

const sliderOutput = document.querySelector(".slider-output");
const slider = document.querySelector(".slider");

slider.addEventListener("input", (event) => {
  const sliderValue = event.target.value;
  sliderOutput.innerHTML = `${sliderValue} X ${sliderValue}`;
  generateGrid(sliderValue);
});

//// Helping Functions

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function generateGrid(size) {
  squares = getSquares();
  squares.forEach((square) => {
    square.remove();
  });
  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  squares = getSquares();
  addSquareEvent();
}

function getSquares() {
  return document.querySelectorAll(".square");
}

function addSquareEvent() {
  // Coloring effect only happens mouse is both clicked and dragged
  let isDragging = false;
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      isDragging = true;
    });
    square.addEventListener("mousemove", () => {
      if (isDragging) {
        if (rainbowMode) {
          square.style.backgroundColor = getRandomColor();
        } else square.style.backgroundColor = color;
      }
    });
    square.addEventListener("mouseup", () => {
      isDragging = false;
    });
  });
}
