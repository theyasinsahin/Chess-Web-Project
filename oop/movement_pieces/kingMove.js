export const kingMove = function(square, board) {
    const possibleMoves = [];
    const file = square.id[0];
    const rank = Number(square.id[1]);

    // King can move one square in any direction
    const moves = [
        { fileOffset: 1, rankOffset: 1 },
        { fileOffset: 1, rankOffset: 0 },
        { fileOffset: 1, rankOffset: -1 },
        { fileOffset: 0, rankOffset: 1 },
        { fileOffset: 0, rankOffset: -1 },
        { fileOffset: -1, rankOffset: 1 },
        { fileOffset: -1, rankOffset: 0 },
        { fileOffset: -1, rankOffset: -1 }
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
