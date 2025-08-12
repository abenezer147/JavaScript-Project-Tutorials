const pixelsContainer = document.querySelector(".pixels-container");
const pixels = document.querySelectorAll(".pixel");

const hexSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const time = 15;

const generateColor = () => {
    let color = "#";

    for(let i = 0; i < 3; i++) {
        const randNum = Math.floor(Math.random() * hexSet.length);
        
        color += hexSet[randNum];
    }

    return color;
}

const compareFn = () => 0.5 - Math.random();

const nodeListArray = Array.from(Array(pixels.length).keys());
const randomizeNodes = nodeListArray.sort(compareFn);

const changeColor = (isColoring) => {
    randomizeNodes.forEach((order, i) => {
        setTimeout(() => {
            pixels[order].style.backgroundColor = isColoring ? generateColor() : "#111111";
        }, time * i);
    });
}

const handleMouseEnter = () => changeColor(true);
const handleMouseLeave = () => changeColor(false);

pixelsContainer.addEventListener("mouseenter", handleMouseEnter);
pixelsContainer.addEventListener("mouseleave", handleMouseLeave);
