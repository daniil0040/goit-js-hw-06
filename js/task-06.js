const input = document.querySelector("#validation-input")
input.addEventListener("blur", handleCheck)
function handleCheck() {
    if (input.value.length !== Number(input.dataset.length)) {
        input.classList.add("invalid")
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid")
    }
}