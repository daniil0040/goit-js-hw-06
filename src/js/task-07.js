const elements = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text")
}

elements.input.addEventListener("input", handleCheck)
function handleCheck(evt) {
elements.span.style.fontSize = `${evt.currentTarget.value}px`
}