const playerOne = `X`;
const playerTwo = `O`;
const btnRestart = document.getElementById(`btnRestart`);
let currentPlayer = playerOne;
let message = document.getElementById(`message`);
let gameOver = false;

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
  let cellText = e.target.value;
  if (!cellText) {
    cellText = currentPlayer;
    e.target.innerText = currentPlayer;
    e.target.removeEventListener("click", cellClicked);
    if (playerWon()) {
      message.innerText = `🏆 ${currentPlayer} won the game!`;
      gameOver = true;
      stopGame();
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
};

function restartGame() {
  cells.forEach((cell) => cell.addEventListener(`click`, cellClicked));
}

restartGame();

function stopGame() {
  cells.forEach((cell) => cell.removeEventListener(`click`, cellClicked));
}

const playerWon = function () {
  if (
    cells[0].innerText === currentPlayer &&
    cells[1].innerText === currentPlayer &&
    cells[2].innerText === currentPlayer
  ) {
    cells[0].style.color = "#82b74b";
    cells[1].style.color = "#82b74b";
    cells[2].style.color = "#82b74b";
    return true;
  } else if (
    cells[3].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[5].innerText === currentPlayer
  ) {
    cells[3].style.color = "#82b74b";
    cells[4].style.color = "#82b74b";
    cells[5].style.color = "#82b74b";
    return true;
  } else if (
    cells[6].innerText === currentPlayer &&
    cells[7].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    cells[6].style.color = "#82b74b";
    cells[7].style.color = "#82b74b";
    cells[8].style.color = "#82b74b";
    return true;
  } else if (
    cells[0].innerText === currentPlayer &&
    cells[3].innerText === currentPlayer &&
    cells[6].innerText === currentPlayer
  ) {
    cells[0].style.color = "#82b74b";
    cells[3].style.color = "#82b74b";
    cells[6].style.color = "#82b74b";
    return true;
  } else if (
    cells[1].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[7].innerText === currentPlayer
  ) {
    cells[1].style.color = "#82b74b";
    cells[4].style.color = "#82b74b";
    cells[7].style.color = "#82b74b";
    return true;
  } else if (
    cells[2].innerText === currentPlayer &&
    cells[5].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    cells[2].style.color = "#82b74b";
    cells[5].style.color = "#82b74b";
    cells[8].style.color = "#82b74b";
    return true;
  } else if (
    cells[0].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[8].innerText === currentPlayer
  ) {
    cells[0].style.color = "#82b74b";
    cells[4].style.color = "#82b74b";
    cells[8].style.color = "#82b74b";
    return true;
  } else if (
    cells[2].innerText === currentPlayer &&
    cells[4].innerText === currentPlayer &&
    cells[6].innerText === currentPlayer
  ) {
    cells[2].style.color = "#82b74b";
    cells[4].style.color = "#82b74b";
    cells[6].style.color = "#82b74b";
    return true;
  }
};

btnRestart.addEventListener(`click`, function () {
  cells.forEach((cell) => {
    cell.innerText = ``;
    cell.style.color = "#fff";
  });
  message.innerText = `Play a game`;
  currentPlayer = playerOne;
  gameOver = false;
  restartGame();
});
