const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
function createMarkup(arr) {
  const liElements = arr.map((element) => {
    const li = document.createElement("li")
    li.classList.add("item")
    li.textContent = element
    return li
  })
  list.append(...liElements)
}
createMarkup(ingredients)