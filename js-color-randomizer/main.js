const button = document.querySelector("button");
const body = document.querySelector("body");

const hexSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const generateColor = () => {
    let color = "#";

    for(let i = 0; i < 6; i++) {
        const randNum = Math.floor(Math.random() * hexSet.length);

        color += hexSet[randNum];
    }

    return color;
}

const handleClick = () => {
    const color = generateColor();

    body.style.backgroundColor = color;
}

button.addEventListener("click", handleClick);
