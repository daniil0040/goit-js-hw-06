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

// const amount = elements.input.value
const allDivs = []
function createBoxes(amount) {
   for (let i = 0; i < amount; i += 1) {
    // const markup = "<div style= background-color:teal;width:30px;height:30px>hello</div>"
     const div = document.createElement("div")
     div.style.backgroundColor = getRandomHexColor();
     div.style.width = "30px"
     div.style.height = "30px"
     div.classList.add("js-box")
    allDivs.push(div)
   }
  elements.boxes.append(...allDivs)
}
// createBoxes(elements.input.value)



// function hendleClick(evt) {
//   for (let i = 1; i < elements.controls.firstChild.value; i += 1) {
//     const markup = "<div width = 30px height = 30px style=`background-color:${getRandomHexColor()}`>hello</div>"
//     elements.boxes.insertAdjacentHTML("beforeend", markup)
//   }

// }