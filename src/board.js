function createChessBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
        const row = Array(8).fill(i % 2 === 0 ? '■' : '□');
        board.push(row.map((square, j) => j % 2 === i % 2 ? '□' : '■'));
    }
    return board;
}

function placePieces(board) {
    const pieces = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    for (let i = 0; i < 8; i++) {
        board[0][i] = pieces[i];
        board[1][i] = 'P';
        board[6][i] = 'p';
        board[7][i] = pieces[i].toLowerCase();
    }
}

function printBoard(board) {
    console.log('  a b c d e f g h');
    console.log(' +-----------------+');
    for (let i = 0; i < 8; i++) {
        console.log(`${8-i}| ${board[i].join(' ')} |${8-i}`);
    }
    console.log(' +-----------------+');
    console.log('  a b c d e f g h');
}

