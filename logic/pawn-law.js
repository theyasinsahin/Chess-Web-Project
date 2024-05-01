const arrayOfPawn = [];

for(const i of filesNameArray){
    arrayOfPawn.push(document.getElementById(i+2));
}

for(const i of filesNameArray){
    arrayOfPawn.push(document.getElementById(i+7));
}

for(const i of arrayOfPawn){
    i.addEventListener("click", () => {

        // Store clicked element
        const clicledElement = i;

        // Find id of clicked element
        const currentId = i.getAttribute("id");

        // Get the number from ID
        let change = parseInt(currentId[1]);

        // Array of elements that we want to add circles
        const addCircleToElements = [];

        for (let i = 0; i < 2; i++) {
            change++;
            addCircleToElements.push(document.getElementById(currentId[0] + change));      
        }

        highlightCircle(addCircleToElements);
    })
}

// Array to track circles
const trackCircleArray = [];

// Add circle to each elements of passed array
const highlightCircle = function(attachCircles) {

    if(trackCircleArray.length != 0){
        undoCircles(trackCircleArray);
    }
    // create child element
    const child = '<div class="circle"></div>';

    attachCircles.forEach((el) => {
    el.innerHTML = child;
    el.classList.add("flex");
    trackCircleArray.push(el);
   });

}

// Remove circles from elements
const undoCircles = function(circlesArray){
    circlesArray.forEach((cur) => {
        cur.innerHTML = "";
        cur.classList.remove("circle");
    });
}