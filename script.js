function changeText() {
    let textElement = document.getElementById("dynamicText");
    textElement.textContent = "This demonstrates Javascript & DOM Manipulation";
    textElement.classList.toggle("highlight"); 
}

function toggleElement() {
    let box = document.getElementById("box");
    if (box) {
        box.remove();
    } else {
        let newBox = document.createElement("div");
        newBox.id = "box";
        newBox.style.width = "100px";
        newBox.style.height = "100px";
        newBox.style.backgroundColor = "lightblue";
        newBox.style.margin = "20px auto";
        document.body.appendChild(newBox);
    }
}

function changeColor() {
    let color = document.getElementById("text");
    color.style.color = 'red';
}