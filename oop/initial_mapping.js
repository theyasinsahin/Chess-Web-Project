// importing square class from class folder
import { Square } from './classes/square_class.js';
import {addPiecesToObject} from "./functions_of_pieces/addPiecesToObject.js";

const mainMap = [];

for (let i = 8; i > 0; i--) {
    const isRowEven = i % 2 == 0 ? true:false;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const isElementEven = j % 2 == 0 ? true:false;

        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        // Create object of Squares
        const square = new Square();

        // set Properties
        square.id = id;

        // color
        // odd row => odd element
        // (769656)
        // even row => even element
        // (769656)
        if((isElementEven && isRowEven) || (!isElementEven && !isRowEven)){
            square.color = 'dark';
        }

        // odd row => even element
        //(EEEED2)
        // even row => odd element
        //(EEEED2)
        if((isElementEven && !isRowEven) || (!isElementEven && isRowEven)){
            square.color = 'light';
        }
        
        // Push array
        rowArray.push(square);
    }    
    mainMap.push(rowArray);
}

mainMap.forEach(function(insiderArray) {
    insiderArray.forEach(function(obj){
        addPiecesToObject(obj);
    })
});

export { mainMap };
