const width = 28;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let squares = [];
let score = 0;

// Create a 28x28 grid (784 squares)
// Square Key - (0 - Pellet) (1 - Wall) (2 - Ghost Lair) (3 - Power Pellet) (4 - Empty)
// Google Sheets can be good for making this kind of layout array

const layout = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  3,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];

// Create the board
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    // create square
    const square = document.createElement("div");

    // put square div in grid div
    grid.appendChild(square);
    // push square to our new array, the one that deals with logic
    squares.push(square);

    // add class to square
    if (layout[i] === 0) {
      squares[i].classList.add("pellet");
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    }
  }
  // console.log(squares);
}

createBoard();

// Starting position of Pac-Man
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman");

function control(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  switch (e.keyCode) {
    case 40:
      if (
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
        pacmanCurrentIndex + width < width ** 2
      ) {
        // console.log("pressed down");
        // console.log(`move down 1 or (${width}) down the array`);
        pacmanCurrentIndex += width;
      }
      break;
    case 39:
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
        pacmanCurrentIndex % width < width - 1
      ) {
        // console.log("pressed right");
        // console.log("move right");
        pacmanCurrentIndex++;
        if (pacmanCurrentIndex === 391) {
          pacmanCurrentIndex = 364;
        }
      }

      break;
    case 38:
      if (
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
        pacmanCurrentIndex >= width
      ) {
        // console.log("pressed up");
        // console.log(`move up 1 or (${width} up the array)`);
        pacmanCurrentIndex -= width;
      }
      break;
    case 37:
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
        pacmanCurrentIndex % width !== 0
      ) {
        // console.log("pressed left");
        // console.log("move left");
        pacmanCurrentIndex--;
        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391;
        }
      }
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  eatPellet();
  powerPelletEaten();
  checkForGameOver();
  checkForWin();
}

document.addEventListener("keyup", control);

function eatPellet() {
  if (squares[pacmanCurrentIndex].classList.contains("pellet")) {
    squares[pacmanCurrentIndex].classList.remove("pellet");
    score++;
    // console.log(score);
    scoreDisplay.innerHTML = score;
  }
}

function powerPelletEaten() {
  // if square pacman is in contains .power-pellet
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    // remove power pellet from square
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    // score + 10
    score += 10;
    // change each ghosts to isScared
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
      console.log(`${ghost.className} the ghost is scared`);
    });
    scoreDisplay.innerHTML = score;

    //  use setTimeout to unscare ghosts after 10 seconds
    setTimeout(unScareGhosts, 10000);
  }
}

function unScareGhosts() {
  ghosts.forEach((ghost) => {
    ghost.isScared = false;
    console.log(`${ghost.className} the ghost is scary again!`);
  });
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 379, 500),
];

// draw ghosts to grid
ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

// move ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  // console.log("moved ghost");
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  // console.log(direction);

  ghost.timerId = setInterval(function () {
    // if next square doesn't contain another ghost or a wall
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      !squares[ghost.currentIndex + direction].classList.contains("wall")
    ) {
      // remove any ghost
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      // add direction to current index
      ghost.currentIndex += direction;
      // add ghost classes
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    // if ghost is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    // if pacman and a scared ghost meet
    if (
      ghost.isScared &&
      // squares[pacmanCurrentIndex] === squares[ghost.currentIndex]
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      // remove classnames - .ghost .scared-ghost .[ghost.className]
      squares[ghost.currentIndex].classList.remove(
        "ghost",
        "scared-ghost",
        ghost.className
      );
      // return ghost to its startingIndex
      ghost.currentIndex = ghost.startIndex;
      // add 100 points to score
      score += 100;
      // re-add .ghost .[ghost.className] to new position
      squares[ghost.currentIndex].classList.add("ghost", ghost.className);
    }
    checkForGameOver();
  }, ghost.speed);
}

// check for game over
function checkForGameOver() {
  // if pacman and a non-scared ghosts are on the same block, game over
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    // for each ghost, stop moving
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    // remove event listener from control()
    document.removeEventListener("keyup", control);
    // alert use game is over
    scoreDisplay.innerHTML = `You Lose :( <br />But hey, you got ${score} points! :D`;
  }
}

// check for win
function checkForWin() {
  if (score > 99) {
    // stop ghosts
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    // remove event listener
    document.removeEventListener("keyup", control);
    // change score to "Winner!"
    scoreDisplay.innerHTML = `You win!<br />Look at you and your ${score} points! 🙌`;
  }
}
