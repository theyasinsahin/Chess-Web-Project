export const bishopMove = function(square, board) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // Bishop can move diagonally
    const directions = [
        { fileOffset: 1, rankOffset: 1 },  // up-right
        { fileOffset: 1, rankOffset: -1 }, // down-right
        { fileOffset: -1, rankOffset: 1 },  // up-left
        { fileOffset: -1, rankOffset: -1 }  // down-left
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
