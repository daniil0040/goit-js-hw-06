const elements = {
    input: document.querySelector("#name-input"),
    name: document.querySelector("#name-output")
};
elements.input.addEventListener("input", handleChangeName);
function handleChangeName(evt) {
    elements.name.textContent = evt.currentTarget.value.trim()
if (elements.name.textContent === "") {
    elements.name.textContent = "Anonymous"
}
}