# Tic-Tac-Toe (Vanilla JS, HTML, CSS)

## Project Overview
This is a browser-based Tic-Tac-Toe game built with semantic HTML, external CSS, and vanilla JavaScript DOM manipulation. The UI follows a retro neon arcade theme and supports round-based replay without refreshing the page.

## Features
- Two-player turn-based gameplay (X and O)
- Win and draw detection with highlighted winning cells
- Real-time scoreboard for X wins, O wins, and draws
- Round progress tracking (`Rounds Played`)
- Start, play-again, and full reset controls
- Dynamic gameplay classes (`preview`, `neon-x`, `neon-o`, `is-win`, `is-disabled`, `is-active-turn`)

## How to Play
Two players take turns clicking on empty squares to mark them with their respective symbols (X or O). A player wins by getting three of their symbols in a row—horizontally, vertically, or diagonally. If all nine squares are filled without either player achieving three in a row, the game ends in a draw. Use the **Start** button to begin a new game, **Play Again** to reset the board for the next round, or **Reset** to clear all scores and start fresh.

## Tech Stack
- HTML5 (semantic structure)
- CSS3 (Grid/Flexbox, transitions, media query, custom properties, Google Fonts)
- JavaScript (ES6+, DOM Manipulation, event handling, state management)

## Member Contributions

- **Hazel Gail Kabiling** — Built the HTML structure including the header, game board layout, buttons, and score display sections.

- **Robbi Eduard Reyes** — Designed and styled the CSS visual theme (layout, spacing, transitions, responsiveness, and color system) and implemented core game logic including win/draw checks and state transitions.

- **Lucas Flores** — Built the rendering and scoreboard update flow, including real-time text updates for scores, game status, and round progress.

- **Ronald Abundo** — Engineered the interaction control flow, including click/hover handlers, start/reset actions, and gameplay class toggling across cells and board states.

## Challenges

### Challenge 1: Uninitialized Variables in Game Logic
**Problem:** After creating multiple functions for the game logic, the game wasn't displaying or functioning properly on the website.

**Solution:** We discovered that we had forgotten to initialize the variables needed within the functions. Once we properly initialized all required variables at the beginning of the script and ensured they were available in the correct scope, the game logic executed correctly and all functions worked as expected.

### Challenge 2: CSS Spacing and Layout Refinement
**Problem:** Eduard encountered difficulty adjusting the minor spaces and gaps throughout the website's content, including determining appropriate values for margins, padding, gaps, and other spacing properties.

**Solution:** We used CSS Flexbox/Grid gap properties, CSS variables for consistent spacing values, and media queries to ensure responsive spacing across different screen sizes. Testing across multiple devices and screen resolutions helped fine-tune the layout to achieve the desired visual appearance.

## Credits
- **MDN Web Docs** — Official documentation for HTML, CSS, and JavaScript APIs
- **CSS-Tricks** — Resources for Flexbox, Grid, and responsive design techniques
- **GitHub Tic-Tac-Toe Examples** — Community implementations for game logic reference and best practices

## How to Run
1. Download or clone the project folder.
2. Ensure these files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
4. Click **Start** to begin playing.

## File Structure
```text
/project-root
  ├── index.html
  ├── styles.css
  ├── script.js
  └── README.md
```
