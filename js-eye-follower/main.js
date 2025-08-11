const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");

const getMouseOffset = (e) => {
    const {innerWidth, innerHeight} = window;

    const x = (e.offsetX * 100) / innerWidth;
    const y = (e.offsetY * 100) / innerHeight;

    return {x, y}
}

const handleMouseMove = (e) => {
    const {x, y} = getMouseOffset(e);

    pupils.forEach(pupil => {
        pupil.style.left = `${x}%`;
        pupil.style.top = `${y}%`;
    });
}

const handleMouseEnter = () => window.removeEventListener("mousemove", handleMouseMove);
const handleMouseLeave = () => window.addEventListener("mousemove", handleMouseMove);

window.addEventListener("mousemove", handleMouseMove);

eyes.forEach(eye => {
    eye.addEventListener("mouseenter", handleMouseEnter);
    eye.addEventListener("mouseleave", handleMouseLeave);
});
