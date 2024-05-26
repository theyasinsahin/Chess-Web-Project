import { rookMove } from "./rookMove.js";
import { bishopMove } from "./bishopMove.js";

export const queenMove = function(square, board) {
    return [...rookMove(square, board), ...bishopMove(square, board)];
};
