export const rookMove = function(square, board) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // Rook can move vertically and horizontally
    const directions = [
        { fileOffset: 0, rankOffset: 1 },  // up
        { fileOffset: 0, rankOffset: -1 }, // down
        { fileOffset: 1, rankOffset: 0 },  // right
        { fileOffset: -1, rankOffset: 0 }  // left
    ];

    directions.forEach(direction => {
        let currentFile = file;
        let currentRank = rank;
        while (true) {
            currentFile = String.fromCharCode(currentFile.charCodeAt(0) + direction.fileOffset);
            currentRank += direction.rankOffset;
            if (board[currentFile] && board[currentFile][currentRank]) {
                if (board[currentFile][currentRank].isPiece) {
                    if (board[currentFile][currentRank].isPiece.includes(square.isPiece.includes("white") ? "black" : "white")) {
                        possibleMoves.push(`${currentFile}${currentRank}`);
                    }
                    break;
                } else {
                    possibleMoves.push(`${currentFile}${currentRank}`);
                }
            } else {
                break;
            }
        }
    });

    return possibleMoves;
};
