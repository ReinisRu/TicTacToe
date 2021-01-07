// let cells = document.querySelectorAll(".cell");

// for (let cell of cells) {
//   cell.addEventListener("click", function () {
//     cell.querySelector("span").textContent = "+";
//   });
// }
/// ----------------
const playerOne = `X`;
const playerTwo = `0`;
let currentPlayer = playerOne;
let message = document.getElementById(`message`);

let board = document.querySelector(`#board`);
for (let i = 0; i <= 8; i++) {
  let element = document.createElement(`div`);
  element.classList.add("cell");
  element.id = `cell-${i}`;
  console.log(i);
  board.append(element);
}

const cells = Array.from(document.querySelectorAll(`.cell`));
console.log(cells);

const cellClicked = function (e) {
  const id = e.target.id;
  if (!cells[id]) {
    cells[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerWon()) {
      message.innerText = `${currentPlayer} won the game!`;
      return;
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
};

cells.forEach((cell) => cell.addEventListener(`click`, cellClicked));

console.log(spaces);
console.log(message.innerText);
