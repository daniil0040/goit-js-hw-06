function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body")
};
elements.btn.addEventListener("click", hendleBtn);
function hendleBtn() {
  const randomClr = getRandomHexColor()
  elements.body.style.backgroundColor = `${randomClr}`;
  elements.color.textContent = `${randomClr}`
}