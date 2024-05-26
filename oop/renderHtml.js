// Import pawnMove function
import { whitePawnMove } from "./movement_pieces/whitePawnMove.js";
import { blackPawnMove } from "./movement_pieces/blackPawnMove.js";
import { rookMove } from "./movement_pieces/rookMove.js";
import { knightMove } from "./movement_pieces/knightMove.js";
import { bishopMove } from "./movement_pieces/bishopMove.js";
import { queenMove } from "./movement_pieces/queenMove.js";
import { kingMove } from "./movement_pieces/kingMove.js";

let board = {};
let hintedSquares = [];
const clickedElements = [];

const renderUI = function(squares) {
    const mainContainer = document.querySelector('.main-container');
    let rankNumber = 8;

    squares.forEach(row => {
        row.forEach(square => {
            const file = square.id[0];
            const rank = square.id[1];
            if (!board[file]) {
                board[file] = {};
            }
            board[file][rank] = square;
        });
    });

    squares.forEach(element => {
        let rank = document.createElement('div');
        rank.classList.add('rank-style');
        rank.setAttribute("id", rankNumber--);
        element.forEach(el => {
            const square = document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');
            square.setAttribute('id', el.id);
            square.classList.add("file-"+el.id[0]);

            if(el.isPiece) {
                const imgElement = document.createElement("img");
                const pieceElement = document.createElement("div");
                imgElement.setAttribute('src', el.isPiece);
                pieceElement.appendChild(imgElement);
                square.appendChild(pieceElement);

                pieceElement.addEventListener('click', function(event) {
                    event.stopPropagation();
                    removeHint(hintedSquares);

                    if (clickedElements.length > 0) {
                        clickedElements[0].style.backgroundColor = "";
                        clickedElements.length = 0;
                    }

                    square.style.backgroundColor = "#b9ca43";
                    clickedElements.push(square);

                    let possibleMoves = [];
                    if (el.isPiece.includes("white/pawn")) {
                        possibleMoves = whitePawnMove(el, board);
                    } else if (el.isPiece.includes("black/pawn")) {
                        possibleMoves = blackPawnMove(el, board);
                    } else if (el.isPiece.includes("rook")) {
                        possibleMoves = rookMove(el, board);
                    } else if (el.isPiece.includes("knight")) {
                        possibleMoves = knightMove(el, board);
                    } else if (el.isPiece.includes("bishop")) {
                        possibleMoves = bishopMove(el, board);
                    } else if (el.isPiece.includes("queen")) {
                        possibleMoves = queenMove(el, board);
                    } else if (el.isPiece.includes("king")) {
                        possibleMoves = kingMove(el, board);
                    }

                    possibleMoves.forEach(move => {
                        const targetSquare = document.getElementById(move);
                        if (targetSquare) {
                            if (targetSquare.innerHTML) {
                                targetSquare.style.backgroundColor = "gray";
                                targetSquare.addEventListener('click', movePiece);
                            } else {
                                addHint(targetSquare);
                                targetSquare.addEventListener('click', movePiece);
                            }
                        }
                    });
                });
            }

            rank.appendChild(square);
        });
        mainContainer.appendChild(rank);
    });
}

const movePiece = function(event) {
    const targetSquare = event.target.closest('.square-common');
    const sourceSquare = clickedElements[0];
    targetSquare.innerHTML = sourceSquare.innerHTML;
    sourceSquare.innerHTML = "";
    sourceSquare.style.backgroundColor = "";
    clickedElements.length = 0;
    removeHint(hintedSquares);

    const sourceId = sourceSquare.id;
    const targetId = targetSquare.id;
    const piece = board[sourceId[0]][sourceId[1]].isPiece;
    board[sourceId[0]][sourceId[1]].isPiece = null;
    board[targetId[0]][targetId[1]].isPiece = piece;

    // Reset background color of the target square if it was gray
    targetSquare.style.backgroundColor = "";
}


const addHint = function(element) {
    // Check if the element already contains a piece
    if (element.innerHTML) {
        element.style.backgroundColor = "red";
        hintedSquares.push(element);
        return;
    }

    element.isHint = true;
    const span = document.createElement("span");
    span.classList.add("highLight");
    element.appendChild(span);
    element.classList.add('flex');
    hintedSquares.push(element);
}


const removeHint = function(hintedSquares) {
    hintedSquares.forEach(i => {
        const span = i.querySelector(".highLight");
        if (span) {
            i.removeChild(span);
        }
        i.style.backgroundColor = "";
        i.classList.remove("flex");
        i.isHint = false;
        i.removeEventListener('click', movePiece);
    });
    hintedSquares.length = 0;
}


import { mainMap } from "./initial_mapping.js";
renderUI(mainMap);
