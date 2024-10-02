const tablesContainer = document.querySelector("#tablesContainer");

const table = [0,1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i <= 10; i++) {
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("table");

    table.forEach(element => {
        const result = document.createElement("div");
        result.textContent = `${i} x ${element} = ${element * i}`;
        tableDiv.appendChild(result);
    });

    tablesContainer.appendChild(tableDiv);
}
