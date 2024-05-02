export function blackPawnMove(el) {
    const row = Number(el.id[1]);
    const column = el.id[0];

    hintForPawnFirstMove(row, column);
}

function hintForPawnFirstMove(row, column){
    let hintedElements = [];
    let newRow = row;
    for (let i = 0; i < 2; i++) {
        //newRow = row + 1 + i;
        newRow--;
        const elementToBeHigh = document.getElementById(column + newRow);
        const span = document.createElement("span");
        span.classList.add("highLight");
        elementToBeHigh.appendChild(span);
        elementToBeHigh.classList.add('flex');
        hintedElements.push(document.getElementById(column + newRow));
    }
    return hintedElements;
}