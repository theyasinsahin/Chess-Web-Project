export const knightMove = function(square, board) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // Knight can move in an L-shape: 2 squares in one direction and then 1 square perpendicular
    const moves = [
        { fileOffset: 1, rankOffset: 2 },
        { fileOffset: 1, rankOffset: -2 },
        { fileOffset: -1, rankOffset: 2 },
        { fileOffset: -1, rankOffset: -2 },
        { fileOffset: 2, rankOffset: 1 },
        { fileOffset: 2, rankOffset: -1 },
        { fileOffset: -2, rankOffset: 1 },
        { fileOffset: -2, rankOffset: -1 }
    ];

    moves.forEach(move => {
        const targetFile = String.fromCharCode(file.charCodeAt(0) + move.fileOffset);
        const targetRank = rank + move.rankOffset;
        if (board[targetFile] && board[targetFile][targetRank]) {
            if (!board[targetFile][targetRank].isPiece || board[targetFile][targetRank].isPiece.includes(square.isPiece.includes("white") ? "black" : "white")) {
                possibleMoves.push(`${targetFile}${targetRank}`);
            }
        }
    });

    return possibleMoves;
};
