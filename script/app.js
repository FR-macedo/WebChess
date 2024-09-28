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
    square.setAttribute("Square-id", i);
    square.classList.add("beige");
    gameBoard.append(square);
  });
}

createBoard();
