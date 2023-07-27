const li = document.querySelectorAll(".item")
console.log(`Number of categories: ${li.length}`);
li.forEach(element => {
    console.log(`Category: ${element.firstElementChild.innerHTML}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});