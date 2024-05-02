// this file contains all functions that we can export

export function addPiecesToObject(obj) {
    const rank = obj.id[1];

    // pawn piece
    if(rank == 2){
        obj.isPiece = '../images/pieces/white/pawn.png';
    }else if(rank == 7) {
        obj.isPiece = '../images/pieces/black/pawn.png';
    }

    if(obj.id == "h1" || obj.id == "a1"){
        obj.isPiece = '../images/pieces/white/rook.png';
    }else if(obj.id == "h8" || obj.id == "a8"){
        obj.isPiece = '../images/pieces/black/rook.png';
    }else if(obj.id == "g1" || obj.id == "b1"){
        obj.isPiece = '../images/pieces/white/knight.png';
    }else if(obj.id == "g8" || obj.id == "b8"){
        obj.isPiece = '../images/pieces/black/knight.png';
    }else if(obj.id == "f1" || obj.id == "c1"){
        obj.isPiece = '../images/pieces/white/bishop.png';
    }else if(obj.id == "f8" || obj.id == "c8"){
        obj.isPiece = '../images/pieces/black/bishop.png';
    }else if(obj.id == "d1"){
        obj.isPiece = '../images/pieces/white/queen.png';
    }else if(obj.id == "d8"){
        obj.isPiece = '../images/pieces/black/queen.png';
    }else if(obj.id == "e1"){
        obj.isPiece = '../images/pieces/white/king.png';
    }else if(obj.id == "e8"){
        obj.isPiece = '../images/pieces/black/king.png';
    }
}