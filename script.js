// let cells = document.querySelectorAll(".cell");

// for (let cell of cells) {
//   cell.addEventListener("click", function () {
//     cell.querySelector("span").textContent = "+";
//   });
// }
/// ----------------
const playerOne = `X`;
const playerTwo = `O`;
const btnRestart = document.getElementById(`btnRestart`);
let currentPlayer = playerOne;
let message = document.getElementById(`message`);

let board = document.querySelector(`#board`);
for (let i = 0; i <= 8; i++) {
  let element = document.createElement(`div`);
  element.classList.add(`cell`);
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
    console.log(cells[id]);
    if (playerWon()) {
      message.innerText = `${currentPlayer} won the game!`;
      return;
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
};

const restartGame = function () {
  cells.forEach((cell) => cell.addEventListener(`click`, cellClicked));
};

restartGame();

const playerWon = function () {
  if (
    cells[0].innerText === currentPlayer &&
    cells[1].innerText === currentPlayer &&
    cells[2].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[3].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[5].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[6].innerText === currentPlayer &&
    cells[7].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[0].innerText === currentPlayer &&
    cells[3].innerText === currentPlayer &&
    cells[6].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[1].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[7].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[2].innerText === currentPlayer &&
    cells[5].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[0].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    return true;
  } else if (
    cells[2].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[6].innerText === currentPlayer
  ) {
    return true;
  }
};

btnRestart.addEventListener(`click`, function () {
  cells.forEach((cell) => {
    cell.innerText = ``;
  });
  message.innerText = `Play a game`;
  currentPlayer = playerOne;
  restartGame();
});
