const gameBoard = document.querySelector("#gameBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");
const width = 8;

const startPieces = [
  blackRook,
  blackKnight,
  blackBishop,
  blackQueen,
  blackKing,
  blackBishop,
  blackKnight,
  blackRook,
  blackPawn,
  blackPawn,
  blackPawn,
  blackPawn,
  blackPawn,
  blackPawn,
  blackPawn,
  blackPawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  whitePawn,
  whitePawn,
  whitePawn,
  whitePawn,
  whitePawn,
  whitePawn,
  whitePawn,
  whitePawn,
  whiteRook,
  whiteKnight,
  whiteBishop,
  whiteQueen,
  whiteKing,
  whiteBishop,
  whiteKnight,
  whiteRook,
];

function createBoard() {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = startPiece;
    square.firstChild?.setAttribute("draggable", true);
    square.setAttribute("Square-id", i);
    // square.classList.add("beige");

    //colorindo os quadrados
    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "beige" : "brown");
    } else {
      square.classList.add(i % 2 === 0 ? "brown" : "beige");
    }
    if (i <= 15) {
    } else {
    }
    gameBoard.append(square);
  });
}

createBoard();

const allSquares = document.querySelectorAll("#gameBoard .square");

allSquares.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
  console.log(e);
}
