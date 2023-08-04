const elements = {
    minusBtn: document.querySelector('button[data-action="decrement"]'),
    plusBtn: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector("#value")
};

let counterValue = 0;
elements.minusBtn.addEventListener("click", hendleClick);
elements.plusBtn.addEventListener("click", hendleClick);

// function hendleMinus() {
//     counterValue -= 1; 
//     elements.value.textContent = counterValue
// }
// function hendlePlus() {
//     counterValue += 1;
//     elements.value.textContent = counterValue
// }

function hendleClick(evt) {
    const dataType = evt.currentTarget.dataset.action
    if (dataType === "increment") {
        counterValue += 1
    }
    else if (dataType === "decrement") {
        counterValue -= 1
    }

    elements.value.textContent = counterValue
}