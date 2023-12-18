let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");


let width = document.getElementById("width");
let height = document.getElementById("height");
let color = document.getElementById("color");
let bgColor = document.getElementById("bgColor");
let content = document.getElementById("content");
let select = document.getElementById("elements");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    container2.innerHTML = "";
    let block = document.createElement(select.value);
    block.style.width = width.value + "px";
    block.style.height = height.value + "px";
    block.style.color = color.value;
    block.style.backgroundColor = bgColor.value;
    block.innerText = content.value;
    block.style.display = "flex";
    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    block.style.fontSize = "20px";
    block.style.fontFamily = "cursive";
});


