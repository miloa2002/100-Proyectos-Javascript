
let marca = "Audi";
let velocidad = 200;
let stock = true;
let modelos = ["R8", "A3", "A7"];

let frase = `Tenemos coches de la marca ${marca}, van a una velocidad de ${velocidad}k/h. Disponibles de estos modelos en stock ${stock ? "Existente" : "No existente"} <br/>`

modelos.forEach(modelo => (
    frase += `${modelo} <br />`
))

document.write(frase)