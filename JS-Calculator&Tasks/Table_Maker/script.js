const button = document.querySelector("button");
const row = document.querySelector("#row");
const col = document.querySelector("#col");


button.addEventListener('click', (e) => {

    e.preventDefault();
    let table = document.createElement("table");

    for (let i = 0; i < row.value; i++) {
        let tRow = document.createElement("tr");
        for (let j = 0; j < col.value; j++) {
            let tCol = document.createElement("td");
            tCol.textContent = `Row${i+1} Column${j+1}`;
            tCol.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
            tRow.appendChild(tCol);
        }
        table.appendChild(tRow);

    }
    document.body.appendChild(table);
})