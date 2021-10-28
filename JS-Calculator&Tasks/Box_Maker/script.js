const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const boxContainer = document.querySelector(".box-conatiner");

box1.addEventListener('click', () => {
    let box = document.createElement("div");
    box.classList.add("large-box", "green-border", "bg-orange");
    box.textContent = "Box1";
    boxContainer.appendChild(box);
})

box2.addEventListener('click', () => {
    let box = document.createElement("div");
    box.classList.add("large-box", "red-border");
    box.innerHTML = `<p>Box2</p>
                    <h1>hi</h1>`;
    boxContainer.appendChild(box);
})

box3.addEventListener('click', () => {
    let box = document.createElement("div");
    box.classList.add("small-box", "green-border");
    box.textContent = "Box2";
    boxContainer.appendChild(box);
})

box4.addEventListener('click', () => {
    let box = document.createElement("div");
    box.classList.add("large-box", "red-border");
    boxContainer.appendChild(box);
})