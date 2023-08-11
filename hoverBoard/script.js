const container = document.getElementById('container');
const colors = [
  "#ffafcc",
  "#e9c46a",
  "#219ebc",
  "#bc6c25",
  "#e63946",
  "#3a5a40",
  "#4361ee",
  "#480ca8",
  "#00afb9",
  "#415a77",
  "#6d597a",
  "#f4d06f",
  "#ff0080",
  "#ef233c",
  "#4da167",
  "#758bfd",
  "#6a4c93",
  "#fb6f92",
  "#e4c1f9",
  "#f4acb7",
  "#ff006e",
];
const squares = 500;

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = '0 5px 15px ${color}, 0 0 10px ${color}'
}

function removeColor(element) {
    element.style.background = "rgb(74, 67, 68)";
    element.style.boxShadow =
      "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}