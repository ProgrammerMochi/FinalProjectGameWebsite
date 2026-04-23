// <!-- Contributed by: Robbi Eduard Reyes — Implemented core game logic including win detection, draw detection, player switching, and initial state management -->

const PLAYER_X = "X";
const PLAYER_O = "O";
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = PLAYER_X;
let isGameActive = false;

let cells, statusText, xScoreText, oScoreText, drawScoreText, roundCountText, startBtn, resetBtn, gameBoardEl;
let xScore = 0;
let oScore = 0;
let drawScore = 0;
let roundsPlayed = 0;

// Checks all win combos and returns the winner + combo, or null if no winner.
function checkWinner(gameBoard) {
  for (const combo of WIN_COMBOS) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return { winner: gameBoard[a], combo };
    }
  }
  return null;
}

// <!-- Contributed by: Lucas Flores — Developed DOM rendering functions for board display, status updates, and score tracking -->

// Updates the scoreboard values shown in the UI.
function updateScores() {
  xScoreText.textContent = xScore;
  oScoreText.textContent = oScore;
  drawScoreText.textContent = drawScore;
}

// Updates the rounds played text in the UI.
function updateRoundCount() {
  roundCountText.textContent = roundsPlayed;
}

// Shows whose turn it is and applies active turn styling.
function updateTurnStatus() {
  statusText.textContent = `${currentPlayer}'s Turn`;
  statusText.classList.add("is-active-turn");
}

// <!-- Contributed by: Ronald Abundo & Lucas Flores — Implemented event handling system including cell click interactions, hover effects, start/reset button logic, and control flow management -->

// Initializes DOM references, binds events, and sets initial game state.
function initGame() {
  cells = document.querySelectorAll(".cell");
  gameBoardEl = document.getElementById("gameBoard");
  statusText = document.getElementById("statusText");
  xScoreText = document.getElementById("xScore");
  oScoreText = document.getElementById("oScore");
  drawScoreText = document.getElementById("drawScore");
  roundCountText = document.getElementById("roundCount");
  startBtn = document.getElementById("startBtn");
  resetBtn = document.getElementById("resetBtn");

  bindEvents();
  updateScores();
  updateRoundCount();
  gameBoardEl.classList.add("is-disabled");
}

// Attaches event listeners to board cells and control buttons.
function bindEvents() {
  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
    cell.addEventListener("mouseenter", handleCellHoverIn);
    cell.addEventListener("mouseleave", handleCellHoverOut);
  });

  startBtn.addEventListener("click", handleStart);
  resetBtn.addEventListener("click", handleReset);
}

// Ends the round, updates status/UI, and records the completed round.
function endRound(message) {
  statusText.textContent = message;
  statusText.classList.remove("is-active-turn");
  startBtn.textContent = "Play Again";
  gameBoardEl.classList.add("is-disabled");
  isGameActive = false;
  roundsPlayed++;
  updateRoundCount();
  updateScores();
}

// Handles cell clicks: place mark, check win/draw, then switch turns.
function handleCellClick(e) {
  const index = Number(e.target.dataset.index);

  if (!isGameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.remove("preview");
  e.target.classList.add(currentPlayer === PLAYER_X ? "neon-x" : "neon-o");

  const winnerResult = checkWinner(board);
  if (winnerResult) {
    winnerResult.combo.forEach(winningIndex => {
      cells[winningIndex].classList.add("is-win");
    });

    if (currentPlayer === PLAYER_X) xScore++;
    else oScore++;

    endRound(`${currentPlayer} Wins!`);
    return;
  }

  if (board.every(cell => cell !== "")) {
    drawScore++;
    endRound("Draw!");
    return;
  }

  currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  updateTurnStatus();
}

// Shows a preview highlight when hovering an available cell.
function handleCellHoverIn(e) {
  const index = Number(e.target.dataset.index);

  if (!isGameActive || board[index] !== "") return;

  e.target.classList.add("preview");
}

// Removes preview highlight when the cursor leaves a cell.
function handleCellHoverOut(e) {
  const index = Number(e.target.dataset.index);

  if (board[index] !== "") return;

  e.target.classList.remove("preview");
}

// Resets the board array and clears dynamic text/classes on all cells.
function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("preview", "is-win", "neon-x", "neon-o");
  });
}

// Starts or restarts a round while keeping current scores.
function handleStart() {
  resetBoard();
  isGameActive = true;
  currentPlayer = PLAYER_X;
  gameBoardEl.classList.remove("is-disabled");
  updateTurnStatus();
}

// Fully resets board, scores, rounds, status text, and button state.
function handleReset() {
  resetBoard();
  xScore = 0;
  oScore = 0;
  drawScore = 0;
  roundsPlayed = 0;
  isGameActive = false;
  updateScores();
  updateRoundCount();
  statusText.textContent = "Game reset. Press Start!";
  statusText.classList.remove("is-active-turn");
  startBtn.textContent = "Start";
  gameBoardEl.classList.add("is-disabled");
}

initGame();
