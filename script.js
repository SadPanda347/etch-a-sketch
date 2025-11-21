const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");
const newButton = document.querySelector(".new-button");
let gridSize = 16;

/* ***Main*** */
createGrid(gridSize);
clearButton.addEventListener('click', clearGrid);
newButton.addEventListener('click', newGrid);

function createGrid(gridSize) {
  for (let rowCount = 0; rowCount < gridSize; rowCount++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let columnCount = 0; columnCount < gridSize; columnCount++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener('mouseenter', colorSquare);
      gridRow.appendChild(square);
    }
  }
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => square.style.backgroundColor = "white");
}

function deleteGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => square.remove());
  const rows = document.querySelectorAll(".grid-row");
  rows.forEach(row => row.remove());
}

function newGrid() {
  let newSize = 0;
  do {
    newSize = prompt("Enter a length between 1 and 100: ");
  } while (newSize < 1 || newSize > 100);

  deleteGrid();
  createGrid(newSize);
}

function getRgbValue() {
  return Math.floor(Math.random() * 256);
}

function colorSquare(event) {
  let r = getRgbValue();
  let g = getRgbValue();
  let b = getRgbValue();

  event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  incrementOpacity(event.target);
}

function incrementOpacity(square) {
  if (square.style.opacity < 1) {
    square.style.opacity = `${Number(square.style.opacity) + .1}`
  }
}