export const blackPawnMove = function(square, board) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // Black pawns move down the board, so rank decreases
    if (rank > 1) {
        // Single step move
        if (!board[file][rank - 1].isPiece) {
            possibleMoves.push(`${file}${rank - 1}`);
            // Double step move from the initial position
            if (rank === 7 && !board[file][rank - 2].isPiece) {
                possibleMoves.push(`${file}${rank - 2}`);
            }
        }
    }

    return possibleMoves;
};
