
const circularShape = document.querySelector(".circle");
const buttons = document.querySelectorAll("button");
const shapeElement = document.querySelector(".square"); 


buttons[0].addEventListener("click", updateColor);


function generateRandomColorComponent() {
    return Math.floor(Math.random() * 256); 
}


function updateColor() {
    const randomColor = `rgb(${generateRandomColorComponent()}, ${generateRandomColorComponent()}, ${generateRandomColorComponent()})`;
    circularShape.style.backgroundColor = randomColor;
}


buttons[1].addEventListener("click", updateShape);


const shapeClasses = [
    "square",
    "rounded", 
    "diamond",
    "triangle",
    "frame",
    "arrow",
    "star",
    "cross",
    "cheg",
    "left-point",
    "parallelogram", 
    "right-point",
];


function getRandomShapeClass() {
    const randomIndex = Math.floor(Math.random() * shapeClasses.length);
    return shapeClasses[randomIndex];
}


function updateShape() {
    const newShapeClass = getRandomShapeClass();
    shapeElement.className = newShapeClass; 
}