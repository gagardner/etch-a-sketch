let gridContainer = document.getElementById("grid-container");
let gridButton = document.getElementById("grid-button");
let userInput = document.getElementById("quantity");

function createSquares(n) {
    if (n > 75) n = 75;
    for (let i = 1; i <= n * n; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");   
    gridContainer.appendChild(square);     
    }
}

function makeSquaresInteractive() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", function () {
            square.setAttribute("style", "background-color: green");
        });
    });
}

createSquares(16);
makeSquaresInteractive();


updateGrid = () => {
    if (userInput.value > 75) userInput.value = 75;
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 1fr)`
    );
    gridContainer.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 1fr)`
    );

    createSquares(userInput.value);
    makeSquaresInteractive();
};

userInput.addEventListener("change", updateGrid);




