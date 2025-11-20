const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");
const newGridButton = document.querySelector(".new-grid-button");
let gridSize = 16;

/* ***Main*** */
createGrid(gridSize);
clearButton.addEventListener('click', clearGrid);
newGridButton.addEventListener('click', newGrid);

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

function colorSquare(event) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  incrementOpacity(event);
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
    newSize = prompt("Enter a new length between 1 and 100: ");
  } while (newSize < 1 || newSize > 100);

  gridSize = newSize;

  deleteGrid();
  createGrid(gridSize);
}

function incrementOpacity(event) {
  if (event.target.style.opacity < 1) {
    event.target.style.opacity = `${Number(event.target.style.opacity) + .1}`
  }
}