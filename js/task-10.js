function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  input: controls.firstElementChild,
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}
elements.createBtn.addEventListener("click", hendleClickAdd)

elements.destroyBtn.addEventListener("click", hendleClickRemove)

function hendleClickRemove() {
  const box = document.querySelector(".js-box")
  elements.boxes.remove()
}

function hendleClickAdd() {
  createBoxes(elements.input.value)
}

const allDivs = []
let size = 20
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
     if (amount >= 1 && amount <= 100) {
     const div = document.createElement("div")
     div.style.backgroundColor = getRandomHexColor();
     div.style.width = `${size}px`
     div.style.height = `${size}px`
     div.classList.add("js-box")
    allDivs.push(div)
     }
   }
  elements.boxes.append(...allDivs)
}