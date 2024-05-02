
// Import pawnMove function
import { whitePawnMove } from "./movement_pieces/whitePawnMove.js";
import { blackPawnMove } from "./movement_pieces/blackPawnMove.js";

let hintedSquares = [];
const clickedElements = [];


// Create a function that renders html using array that we provide
const renderUI = function(squares) {

    // select mainContainer from my markup
    const mainContainer = document.querySelector('.main-container');
    let rankNumber = 8;   
    
    // Create square of size 70x70
    squares.forEach(element => {
        // rank is row and we have 8 ranks
        let rank = document.createElement('div');
        rank.classList.add('rank-style');
        rank.setAttribute("id", rankNumber--)
        element.forEach(el => {

            // creating html element with javascript
            const square = document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');

            // assign unique id to each square
            square.setAttribute('id', el.id);

            // add file class to each square
            square.classList.add("file-"+el.id[0]);

            square.addEventListener('click', el.movement);

            const imgElement = document.createElement("img");
            if(el.isPiece){
                
                // Add image to the Square
                const pieceElement = document.createElement("div");
                imgElement.setAttribute('src', el.isPiece);
                pieceElement.appendChild(imgElement);
                square.appendChild(pieceElement);

                // Apply function to pieceElement
                pieceElement.addEventListener('click', function(){
                    removeHint(hintedSquares);
                    
                    // Move the Element
                    /*
                    if(clickedElements.length > 0){
                        // Get the clicked empty square
                        const emptySquare = document.getElementById(el.id);
                        // Move the piece to the empty square
                        emptySquare.innerHTML = clickedElements[0].innerHTML;
                        // Remove the piece from its previous position
                        clickedElements[0].innerHTML = "";
                        clickedElements.length = 0;
                    }
                    */

                    if(clickedElements.length > 0){
                        clickedElements[0].removeAttribute("style");
                        clickedElements.length = 0;
                    }
                    document.getElementById(el.id).style.backgroundColor = "#b9ca43";
                    clickedElements.push(document.getElementById(el.id));

                    let currentSquareEl = document.getElementById(el.id);

                    if(currentSquareEl.innerHTML.includes("white/pawn")){
                        whitePawnMove(el);
                        addHint(document.getElementById(el.id[0]+(Number(el.id[1])+1)))
                        addHint(document.getElementById(el.id[0]+(Number(el.id[1])+2)))
                    }
                    else if(currentSquareEl.innerHTML.includes("black/pawn")){
                        blackPawnMove(el);
                        addHint(document.getElementById(el.id[0]+(Number(el.id[1])-1)))
                        addHint(document.getElementById(el.id[0]+(Number(el.id[1])-2)))
                    }
                });
            }

            rank.appendChild(square);
        });
        mainContainer.appendChild(rank);
    });
}

const addHint = function(element) {
    element.isHint = true;
    hintedSquares.push(element);
}

const removeHint = function(hintedSquares){
    hintedSquares.forEach((i) => {
        i.innerHTML = "";
        i.classList.remove("flex");
    });    
}


import {mainMap} from "./initial_mapping.js";
renderUI(mainMap);