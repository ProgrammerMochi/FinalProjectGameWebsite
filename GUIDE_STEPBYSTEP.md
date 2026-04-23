### Eto yung complete documentation ng project natin guys, may step by step guide natin dito, fofollow niyo na lang. Hanapin niyo na lang name niyo below (Ctrl + F).

# Tic-Tac-Toe Team Coding Guide (Step-by-Step Per File)

Use this document as your coding checklist. Follow the order exactly so everyone can work in parallel without overlapping.

## Rules (Must Follow) !!!
- HTML, CSS, Vanilla JS only
- No Canvas / no external JS libraries
- No backend / API / database / Node.js
- No `requestAnimationFrame`, `localStorage`, or `sessionStorage`

---

## File 1: `index.html` (Owner: Member 1)
## Member 1 — [HAZEL] — Semantic HTML Architect

### Goal
Create complete semantic structure and all required containers/buttons for JS and CSS.

### Steps
1. Add page shell with semantic tags in this order: `<header>`, `<main>`, `<footer>`.
2. Inside `<header>`, add one `<h1>` (project title).
3. Inside `<main>`, add one `<section>` for game controls.
4. In controls section, add 3 buttons with IDs:
   - `startBtn`
   - `resetBtn`
   - `playAgainBtn`
5. Add one dynamic status container with ID `statusText`.
6. Add one score section with text containers:
   - `xScore`
   - `oScore`
   - `drawScore`
7. Add board section with ID `gameBoard`.
8. Add 9 clickable cells inside `gameBoard`, each with class `cell` and `data-index="0"` to `data-index="8"`.
9. Add script and style links at the end:
   - `<link rel="stylesheet" href="styles.css">`
   - `<script src="script.js" defer></script>`

### Checklist
- Semantic tags present
- At least 1 heading
- At least 2 buttons
- Dynamic containers for status and score exist
- 9 cells exist with correct `data-index`

---

## File 2: `styles.css` (Owner: Member 2)
## Member 2 — [EDUARD] — CSS Theme & Motion Engineer

### Goal
Implement complete visual theme and all JS-toggled classes.

### Steps
1. Define CSS variables in `:root` (colors, spacing, radius, font sizes).
2. Apply global reset and base typography.
3. Style page layout using **flexbox/grid** (required rubric item).
4. Style board as 3x3 grid and make cells equal size.
5. Style buttons with hover/active feedback.
6. Add **transitions/animations** for hover and win highlight.
7. Add **media query** for smaller screens.
8. Create the 4 dynamic classes JS will toggle:
   - `.is-hidden` (hide elements)
   - `.is-active-turn` (highlight current player)
   - `.is-win` (winning cells)
   - `.is-disabled` (lock board when round ends)

### Done Checklist
- Separate CSS file used
- Cohesive visual theme
- At least 3 rubric CSS techniques used
- Dynamic classes are defined and visually clear

---

## File 3: `script.js` (Owner: Member 3 first section: game logic only)
## Member 3 — [EDUARD] — Core Game Logic Engineer

### Goal
Write pure game state logic (no DOM rendering here).

### Steps
1. Declare constants:
   - `PLAYER_X = "X"`, `PLAYER_O = "O"`
   - `WIN_COMBOS` array of 8 winning index combos
2. Declare state variables:
   - `board` (array of 9 empty strings)
   - `currentPlayer`
   - `isGameActive`
3. Declare score state object:
   - `scores = { X: 0, O: 0, draws: 0 }`
4. Create function `createInitialState()`.
5. Create function `checkWinner(board)`:
   - Return winner and combo if found
   - Return `null` if no winner
6. Create function `checkDraw(board)`:
   - True when board full and no winner
7. Create function `switchPlayer()`.
8. Create function `resetBoardState()`:
   - Clears board
   - Restores active round
   - Keeps score (for Play Again flow)
9. Create function `fullResetState()`:
   - Clears board
   - Resets score to 0

### Checklist
- Win and draw logic works
- State can reset for round and full game
- No DOM code mixed in this section

---

## File 4: `script.js` (Owner: Member 4 second section: DOM + score rendering)
## Member 4 — [LUCAS] — DOM Rendering & Score Engineer

### Goal
Connect game state to visible UI.

### Steps
1. Cache DOM elements using required selectors:
   - `getElementById` and/or `querySelector` / `querySelectorAll`
2. Implement `renderBoard()`:
   - Update each cell using `textContent`
3. Implement `renderStatus(message)`:
   - Update status container with `textContent`
4. Implement `renderScores()`:
   - Update X/O/Draw counters live
5. Implement `highlightWinningCells(combo)`:
   - Add `.is-win` class to 3 winning cells
6. Implement board lock/unlock:
   - Add/remove `.is-disabled`
7. Implement button visibility states:
   - Toggle `.is-hidden` on `playAgainBtn`

### Checklist
- All dynamic containers update correctly
- Score updates in real time
- Winning cells are visually highlighted

---

## File 5: `script.js` (Owner: Member 5 final section: events + control flow)
## Member 5 — [RONALD] — Interaction & Control Flow Engineer

### Goal
Wire all event listeners and game flow lifecycle.

### Steps
1. Add event listeners for at least 2 types:
   - `click` (cells + buttons)
   - `mouseenter` / `mouseleave` (cell hover effect)
2. Create `handleStart()`:
   - Activate game
   - Reset board state
   - Render initial UI
3. Create `handleCellClick(event)`:
   - Ignore if cell filled or game inactive
   - Place current mark
   - Check winner/draw
   - Update score and status when needed
   - Otherwise switch turn
4. Create hover handlers:
   - `handleCellHoverIn()`
   - `handleCellHoverOut()`
   - Use class toggles only for preview
5. Create `handlePlayAgain()`:
   - Reset board only
   - Keep scoreboard
6. Create `handleReset()`:
   - Full reset board + scores
7. Create `initGame()`:
   - Cache DOM
   - Bind all listeners
   - Set default UI states
8. Call `initGame()` once at file end.

### Checklist
- Start/Play Again/Reset all work
- Two or more event types used
- Turn flow and round lifecycle are stable

---

## Team Integration Order
1. Member 1 completes `index.html` skeleton.
2. Member 2 styles stable selectors/classes in `styles.css`.
3. Member 3 adds JS logic state/functions.
4. Member 4 connects logic to DOM updates.
5. Member 5 wires events and control flow.
6. Whole team performs final rubric check together.

---

## Final Rubric Validation (Whole Team)
- HTML semantic tags present
- CSS is separate and uses required techniques
- JS is separate and uses required selectors + DOM updates
- At least 2 event listener types
- Real-time score tracking works
- Start / Reset / Play Again mechanisms work
- No prohibited technologies used
