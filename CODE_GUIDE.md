# Tic-Tac-Toe Code Guide - Study Reference

This guide explains each part of your code in detail. Use this to understand and explain how your game works.

---

## 📄 FILE 1: index.html

**Contributors:** Hazel Gail Kabiling & Lucas Flores

### Overview
The HTML file provides the semantic structure for your entire game. It's like the "skeleton" of your application—it defines what elements exist and where they go, but doesn't define how they look or behave.

### Key Sections Explained

#### `<!DOCTYPE html>` and Language Setup
```html
<!doctype html>
<html lang="en">
```
- `<!DOCTYPE html>` tells the browser this is an HTML5 document
- `lang="en"` specifies the language is English (good for accessibility and SEO)

#### Head Section
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Tic Tac Toe</title>
<link rel="stylesheet" href="styles.css" />
```
- **charset**: Ensures special characters display correctly
- **viewport**: Makes the page responsive on mobile devices (scale to fit device width)
- **title**: Shows in browser tab
- **link**: Connects the external CSS file

#### Header
```html
<header>
  <h1>Tic Tac Toe</h1>
</header>
```
- Simple title display at the top of the page

#### Main Content Section
The main element contains everything the player interacts with:

**Controls Section:**
```html
<section class="controls">
  <button id="startBtn">Start</button>
  <button id="resetBtn">Reset</button>
</section>
```
- Two buttons with unique IDs so JavaScript can find and control them
- `id="startBtn"` lets JavaScript select this with `document.getElementById("startBtn")`

**Status Display:**
```html
<section>
  <p id="statusText">Game not started</p>
</section>
```
- Shows whose turn it is ("X's Turn") or the result ("X Wins!")
- `id="statusText"` so JavaScript can update it dynamically

**Scoreboard:**
```html
<section>
  <p>X Score: <span id="xScore">0</span></p>
  <p>O Score: <span id="oScore">0</span></p>
  <p>Draws: <span id="drawScore">0</span></p>
  <p>Rounds Played: <span id="roundCount">0</span></p>
</section>
```
- Uses `<span>` tags so JavaScript can target just the number and update it
- Example: `document.getElementById("xScore").textContent = 5;` updates only the "5"

**Game Board:**
```html
<section id="gameBoard">
  <button class="cell" data-index="0" aria-label="Cell 1"></button>
  <button class="cell" data-index="1" aria-label="Cell 2"></button>
  <!-- ... 7 more cells ... -->
  <button class="cell" data-index="8" aria-label="Cell 9"></button>
</section>
```
- 9 `<button>` elements arranged in a grid (CSS will style them into 3×3)
- **class="cell"**: Common class so CSS styles all cells the same, and JavaScript can select all with `.querySelectorAll(".cell")`
- **data-index="0" to data-index="8"**: Custom data attribute. When you click a cell, JavaScript reads this to know which cell was clicked
  - Example: clicking the center cell reads `data-index="4"`
- **aria-label**: Accessibility feature for screen readers

**Footer:**
```html
<footer>
  <p>Tic Tac Toe Project</p>
</footer>
```
- Simple footer with project name

#### Script Loading
```html
<script src="script.js" defer></script>
```
- `defer` attribute: Loads the script AFTER the HTML is fully loaded
- This is important because the script needs to find all the HTML elements first

---

## 🎨 FILE 2: styles.css

**Contributors:** Robbi Eduard Reyes & Hazel Gail Kabiling

### Overview
CSS controls the visual appearance and layout. It doesn't change what the game does—just how it looks. Your design choice is a retro neon arcade theme.

### Key Sections Explained

#### CSS Variables (Design System)
```css
:root {
  --neon-green: #39ff14;
  --neon-cyan: #00eaff;
  --neon-magenta: #ff2bd6;
  --color-primary: var(--neon-green);
  --color-secondary: #f8fff8;
  --color-background: #050505;
  --color-text: #f8fff8;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```
**What this does:** Defines reusable colors and spacing values
**Why:** If you want to change the main color from green to cyan, you change it in ONE place instead of everywhere
**Example usage:** `color: var(--color-primary);` applies neon green automatically

#### Body & Layout
```css
body {
  font-family: "Press Start 2P", monospace;
  background: radial-gradient(circle at 20% 10%, #103010 0%, transparent 40%),
              radial-gradient(circle at 80% 90%, #0b260b 0%, transparent 35%),
              var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```
- **font-family**: Uses a retro pixel-style font from Google Fonts
- **background**: Multiple radial gradients create a subtle green glow effect at corners
- **display: flex; flex-direction: column;**: Stacks elements vertically
- **min-height: 100vh**: Makes body at least 100% of viewport height (even if content is short)

#### Header Styling
```css
h1 {
  font-size: 2.5rem;
  color: var(--color-secondary);
  text-shadow: 
    0 0 6px var(--color-primary),
    0 0 14px var(--color-primary);
  letter-spacing: 2px;
}
```
- **text-shadow**: Layered shadows create the neon glow effect (glowing green around the text)
- **letter-spacing**: Adds space between letters for retro look

#### Game Board (Grid Layout)
```css
#gameBoard {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: var(--spacing-md);
  margin-top: 30px;
  margin-bottom: auto;
}
```
- **display: grid**: Uses CSS Grid for perfect 3×3 arrangement
- **repeat(3, 100px)**: Creates 3 columns, each exactly 100px wide
- **gap**: Adds space between cells (16px from the variable)
- **margin-bottom: auto**: Pushes board up and leaves space at bottom

#### Cell Styling (The Squares You Click)
```css
.cell {
  background-color: #000;
  color: var(--neon-green);
  border: 2px solid var(--neon-green);
  border-radius: var(--radius-md);
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, 
              box-shadow 0.3s ease, color 0.3s ease;
  box-shadow: inset 0 0 8px rgba(57, 255, 20, 0.35),
              0 0 8px rgba(57, 255, 20, 0.45),
              0 0 18px rgba(57, 255, 20, 0.3);
}
```
- **background-color: #000**: Black background
- **border**: Green border creates the glowing frame
- **box-shadow**: Multiple shadows layered to create neon glow effect
  - `inset` creates glow inside the cell
  - Regular shadows create glow around the cell
- **transition**: Smoothly animates changes (hover effects, clicks)
- **cursor: pointer**: Shows hand cursor on hover

#### Cell Hover Effect
```css
.cell:hover {
  background-color: var(--color-highlight);
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.7);
}
```
- **scale(1.05)**: Grows the cell to 105% of original size
- Brightens the glow when you hover

#### Button Styling (Start & Reset)
```css
button {
  background-color: #000;
  color: var(--neon-green);
  border: 3px solid var(--neon-green);
  padding: 20px 30px;
  font-family: "Press Start 2P", monospace;
  transition: transform 0.08s steps(1, end), 
              box-shadow 0.08s steps(1, end);
  box-shadow: 4px 4px 0 #f8fff8, 8px 8px 0 #0b260b;
}
```
- **box-shadow**: Two layers create a 3D "retro button" effect
- **padding**: Creates clickable area around text
- **transition with steps(1, end)**: Snappy, non-smooth animation (retro feel)

#### Button Hover
```css
button:hover {
  background-color: var(--neon-green);
  color: #050505;
}
```
- Colors invert: green background with dark text

#### Button Active (Clicked)
```css
button:active {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0 #0b260b;
}
```
- **translate(4px, 4px)**: Moves button slightly down/right to simulate pressing
- Shadow reduced to make it look "pressed in"

#### Dynamic Classes (JavaScript Applies These)

**`.preview` - Hover preview on empty cells:**
```css
.preview {
  background-color: #0d1d0d;
  transform: scale(1.03);
  box-shadow: 0 0 10px rgba(248, 255, 248, 0.35);
}
```

**`.neon-x` - Styling when X is placed:**
```css
.neon-x {
  color: var(--color-primary); /* neon green */
  text-shadow:
    0 0 4px rgba(57, 255, 20, 0.95),
    0 0 10px rgba(57, 255, 20, 0.75),
    0 0 18px rgba(57, 255, 20, 0.55);
}
```
- Makes the "X" glow green with layered text-shadows

**`.neon-o` - Styling when O is placed:**
```css
.neon-o {
  color: var(--color-secondary); /* white */
  text-shadow:
    0 0 4px rgba(248, 255, 248, 0.95),
    0 0 10px rgba(248, 255, 248, 0.75),
    0 0 18px rgba(248, 255, 248, 0.55);
}
```
- Makes the "O" glow white to distinguish from X

**`.is-win` - Highlights winning cells:**
```css
.is-win {
  background-color: #112411;
  border-color: var(--color-secondary);
  box-shadow: 0 0 16px var(--color-primary);
}
```
- Darkens background and intensifies glow

**`.is-disabled` - Prevents clicks when game isn't active:**
```css
.is-disabled {
  pointer-events: none;
  opacity: 0.5;
}
```
- `pointer-events: none`: Clicks don't work on these elements
- `opacity: 0.5`: Fades them out visually

#### Responsive Design (Mobile)
```css
@media (max-width: 500px) {
  #gameBoard {
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
  }
  .cell {
    font-size: 1.5rem;
  }
}
```
- **@media (max-width: 500px)**: Applies these styles only on screens smaller than 500px
- Shrinks cells from 100px to 80px so they fit on mobile

---

## ⚙️ FILE 3: script.js

**Core Logic Contributors:** Robbi Eduard Reyes  
**DOM Rendering:** Lucas Flores  
**Event Handling:** Ronald Abundo & Robbi Eduard Reyes

### Overview
JavaScript brings interactivity and logic. It:
1. Manages game state (whose turn, board contents, scores)
2. Detects wins and draws
3. Updates the HTML and CSS based on game events
4. Handles player clicks

### Part 1: Game Constants & State

#### Constants (Never Change)
```javascript
const PLAYER_X = "X";
const PLAYER_O = "O";
const WIN_COMBOS = [
  [0, 1, 2],  // Top row
  [3, 4, 5],  // Middle row
  [6, 7, 8],  // Bottom row
  [0, 3, 6],  // Left column
  [1, 4, 7],  // Middle column
  [2, 5, 8],  // Right column
  [0, 4, 8],  // Diagonal (top-left to bottom-right)
  [2, 4, 6]   // Diagonal (top-right to bottom-left)
];
```
- **WIN_COMBOS**: All 8 possible winning patterns
- Each combo is an array of three cell indices
- Example: `[0, 1, 2]` means the top row (cells 0, 1, 2) = winning combination

#### Game State Variables
```javascript
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = PLAYER_X;
let isGameActive = false;
```
- **board**: Represents the game board as an array. Each position corresponds to a cell (0-8)
  - Empty string `""` = empty cell
  - "X" = X plays here
  - "O" = O plays here
- **currentPlayer**: Tracks whose turn it is
- **isGameActive**: False until player clicks Start

#### DOM References & Scores
```javascript
let cells, statusText, xScoreText, oScoreText, drawScoreText, roundCountText, startBtn, resetBtn, gameBoardEl;
let xScore = 0;
let oScore = 0;
let drawScore = 0;
let roundsPlayed = 0;
```
- These variables store references to HTML elements so we can update them
- Score variables track wins/draws across multiple rounds

### Part 2: Core Game Logic

#### Check Winner Function
```javascript
function checkWinner(gameBoard) {
  for (const combo of WIN_COMBOS) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return { winner: gameBoard[a], combo };
    }
  }
  return null;
}
```
**How it works:**
1. Loops through all 8 WIN_COMBOS
2. For each combo, gets three cell indices (a, b, c)
3. Checks if all three cells have the same symbol (X or O) AND are not empty
4. If yes: returns an object with the winner ("X" or "O") and the winning combo
5. If no winner found: returns null

**Example:**
- If `board = ["X", "X", "X", "", "", "", "", "", ""]`
- When checking combo `[0, 1, 2]`: a=0, b=1, c=2
- `gameBoard[0]` = "X", `gameBoard[1]` = "X", `gameBoard[2]` = "X"
- All match! Returns `{ winner: "X", combo: [0, 1, 2] }`

### Part 3: UI Update Functions

#### Update Scores
```javascript
function updateScores() {
  xScoreText.textContent = xScore;
  oScoreText.textContent = oScore;
  drawScoreText.textContent = drawScore;
}
```
- Updates the three score display elements with current values
- `.textContent` changes the text shown in HTML

#### Update Round Count
```javascript
function updateRoundCount() {
  roundCountText.textContent = roundsPlayed;
}
```
- Updates the "Rounds Played" display

#### Update Turn Status
```javascript
function updateTurnStatus() {
  statusText.textContent = `${currentPlayer}'s Turn`;
  statusText.classList.add("is-active-turn");
}
```
- Sets status text to "X's Turn" or "O's Turn"
- `classList.add()` applies the CSS class that makes it glow

### Part 4: Game Initialization

#### Init Game (Runs When Page Loads)
```javascript
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
```
**What it does:**
1. **querySelector/getElementById**: Finds HTML elements and stores references
   - `querySelectorAll(".cell")` finds all 9 cells as a collection
   - `getElementById("xScore")` finds the specific element to update
2. **bindEvents()**: Connects click listeners
3. **Updates initial display**: Shows scores and rounds
4. **Disables the board**: Adds `.is-disabled` class so players can't click until they hit Start

#### Bind Events (Connect Click Listeners)
```javascript
function bindEvents() {
  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
    cell.addEventListener("mouseenter", handleCellHoverIn);
    cell.addEventListener("mouseleave", handleCellHoverOut);
  });

  startBtn.addEventListener("click", handleStart);
  resetBtn.addEventListener("click", handleReset);
}
```
**What it does:**
- **forEach**: Loops through all 9 cells
- **addEventListener**: Attaches a listener that triggers a function when an event happens
  - `"click"`: When cell is clicked, run `handleCellClick`
  - `"mouseenter"`: When mouse enters cell, run `handleCellHoverIn`
  - `"mouseleave"`: When mouse leaves cell, run `handleCellHoverOut`
- **startBtn/resetBtn**: Add listeners to the control buttons

### Part 5: Event Handlers (What Happens When User Interacts)

#### Handle Cell Click (Main Gameplay)
```javascript
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
```

**Step-by-step breakdown:**

1. **Get cell index:**
   ```javascript
   const index = Number(e.target.dataset.index);
   ```
   - `e.target` is the button that was clicked
   - `.dataset.index` reads the data-index attribute
   - `Number()` converts string "0" to integer 0

2. **Check if move is valid:**
   ```javascript
   if (!isGameActive || board[index] !== "") return;
   ```
   - If game isn't active OR cell already has a mark, stop (do nothing)
   - `return;` exits the function early

3. **Place the mark:**
   ```javascript
   board[index] = currentPlayer;  // Update board array
   e.target.textContent = currentPlayer;  // Show X or O in HTML
   ```

4. **Apply styling:**
   ```javascript
   e.target.classList.remove("preview");  // Remove hover effect
   e.target.classList.add(currentPlayer === PLAYER_X ? "neon-x" : "neon-o");
   ```
   - If X played: add class "neon-x" (glowing green)
   - If O played: add class "neon-o" (glowing white)

5. **Check for winner:**
   ```javascript
   const winnerResult = checkWinner(board);
   if (winnerResult) {
     // Highlight winning cells
     winnerResult.combo.forEach(winningIndex => {
       cells[winningIndex].classList.add("is-win");
     });
     // Increment winner's score
     if (currentPlayer === PLAYER_X) xScore++;
     else oScore++;
     // End round
     endRound(`${currentPlayer} Wins!`);
     return;
   }
   ```
   - If there's a winner, highlight the three winning cells
   - Increase winner's score
   - End the round and show "X Wins!" or "O Wins!"

6. **Check for draw:**
   ```javascript
   if (board.every(cell => cell !== "")) {
     drawScore++;
     endRound("Draw!");
     return;
   }
   ```
   - `every()` checks if all 9 cells are filled (not empty)
   - If yes, it's a draw

7. **Switch player (if no winner/draw):**
   ```javascript
   currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
   updateTurnStatus();
   ```
   - Uses ternary operator: if X, switch to O; if O, switch to X
   - Update the display to show whose turn it is

#### Handle Cell Hover In
```javascript
function handleCellHoverIn(e) {
  const index = Number(e.target.dataset.index);

  if (!isGameActive || board[index] !== "") return;

  e.target.classList.add("preview");
}
```
- Only show preview on empty cells during active game
- Adds CSS class that dims/highlights the cell

#### Handle Cell Hover Out
```javascript
function handleCellHoverOut(e) {
  const index = Number(e.target.dataset.index);

  if (board[index] !== "") return;

  e.target.classList.remove("preview");
}
```
- Removes preview highlight when mouse leaves

#### End Round
```javascript
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
```
**What it does:**
- Shows result message ("X Wins!" or "Draw!")
- Removes the glowing effect from status text
- Changes Start button to "Play Again"
- Disables the board (adds `is-disabled` class)
- Stops gameplay (`isGameActive = false`)
- Increments rounds and updates displays

### Part 6: Reset Functions

#### Reset Board (Clears Just the Board)
```javascript
function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("preview", "is-win", "neon-x", "neon-o");
  });
}
```
- Clears the board array (all cells empty)
- Clears all cell HTML text
- Removes all styling classes from cells
- Used by both Start and Reset buttons

#### Handle Start (Begin New Round)
```javascript
function handleStart() {
  resetBoard();
  isGameActive = true;
  currentPlayer = PLAYER_X;
  gameBoardEl.classList.remove("is-disabled");
  updateTurnStatus();
}
```
**What it does:**
- Clears the board
- Sets `isGameActive = true` so cells are clickable
- Resets current player to X
- Removes `is-disabled` class so cells respond to clicks
- Shows "X's Turn"
- Keeps scores intact (allows "play again")

#### Handle Reset (Full Reset)
```javascript
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
```
**What it does:**
- Clears the board
- Resets all scores to 0
- Resets rounds to 0
- Disables the board
- Updates all displays
- Changes Start button back to "Start"
- Completely fresh slate

### Part 7: Start the Game
```javascript
initGame();
```
- Runs when the page loads
- Sets up the game

---

## 🔄 How It All Works Together

### Sequence When You Click Start:

1. User clicks "Start" button
2. `handleStart()` is triggered
3. Board is cleared, scores stay same, game becomes active
4. Display updates to "X's Turn"
5. Cells are now clickable

### Sequence When You Click a Cell During Gameplay:

1. User clicks an empty cell
2. `handleCellClick()` is triggered
3. Current player's mark (X or O) is placed on board array and displayed in cell
4. `checkWinner()` checks if this move won
5. If win: highlight winning cells, increase winner's score, end round
6. If no win, check if board is full (draw)
7. If draw: increase draw count, end round
8. If neither: switch player and show new turn status

### Sequence When You Click Reset:

1. User clicks "Reset" button
2. `handleReset()` is triggered
3. Everything resets: board, scores, rounds, buttons
4. Game requires Start button to be clicked again

---

## 💡 Key Concepts to Remember

### Event-Driven Programming
Your game is **event-driven**: it responds to user actions (clicks, hovers). JavaScript listens for events and runs functions.

### State Management
The `board` array is your single source of truth. The DOM (HTML display) is always synchronized with this state.

### CSS Classes as State Indicators
Classes like `.is-disabled`, `.neon-x`, `.is-win` indicate the current state visually. JavaScript adds/removes these classes to change appearance without rewriting HTML.

### Separation of Concerns
- **HTML**: Structure only
- **CSS**: Styling only
- **JavaScript**: Logic and DOM updates

---

## 📝 Questions to Prepare For

### HTML Questions
1. "Why do the cells use data attributes?"
   - Answer: Data attributes store information (cell index) that JavaScript can read
2. "Why are there span elements in the scoreboard?"
   - Answer: So JavaScript can update just the number without rewriting the label

### CSS Questions
1. "How does the neon glow effect work?"
   - Answer: Multiple layered text-shadows and box-shadows create the glowing appearance
2. "What does the media query do?"
   - Answer: Adjusts cell sizes for mobile devices to ensure the game fits on smaller screens

### JavaScript Questions
1. "How does win detection work?"
   - Answer: We have 8 pre-defined winning combinations. After each move, we check if all three cells in any combo match the current player's symbol
2. "Why disable the board with CSS instead of checking in JavaScript?"
   - Answer: We do both! The state check (`isGameActive`) prevents logic errors, and the CSS class (`is-disabled`) prevents clicks from being registered at all
3. "What's the difference between Start and Reset?"
   - Answer: Start keeps scores but clears the board. Reset clears everything
4. "How does the hover preview work?"
   - Answer: `mouseenter` adds a CSS class, `mouseleave` removes it. CSS handles the visual effect

---

## 🎮 Game Flow Diagram

```
Page Loads
    ↓
initGame() runs
    ↓
User clicks "Start"
    ↓
handleStart() → Board cleared, game active, shows "X's Turn"
    ↓
User clicks cell
    ↓
handleCellClick() → Place mark, check win/draw
    ↓
    ├─ Win? → Highlight cells, increase score, endRound()
    ├─ Draw? → Increase draw count, endRound()
    └─ Neither? → Switch player, show new turn
    ↓
endRound() → Board disabled, show result, button says "Play Again"
    ↓
User clicks "Start" (now says "Play Again")
    ↓
New round begins (loop back to "User clicks cell")
    ↓
User clicks "Reset" (anytime)
    ↓
handleReset() → All scores cleared, board disabled, button says "Start"
```

---

Good luck with your presentation! 🚀
