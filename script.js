let gridContainer = document.getElementById("grid-container");

for (let i = 1; i <= 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    //para.innerHTML = i;
    gridContainer.appendChild(square);
    square.addEventListener("mouseenter", function () {
        square.setAttribute("style", "background-color: yellow");
    });
}
/*
const squares = document.querySelectorAll(".grid-square");
squares.forEach((square) => {
    square.addEventListener("mouseenter", function () {
        square.setAttribute("style", "background-color: green");
    });
}); */
