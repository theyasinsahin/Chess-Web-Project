export const whitePawnMove = function(square) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // White pawns move up the board, so rank increases
    if (rank < 8) {
        possibleMoves.push(`${file}${rank + 1}`);
        if (rank === 2) {
            possibleMoves.push(`${file}${rank + 2}`);
        }
    }

    return possibleMoves;
};
