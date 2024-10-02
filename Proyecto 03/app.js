
const MAX = 135;
const LIMITE = 60;

const VELOCIDAD = Math.floor(Math.random() * 201);

if(VELOCIDAD > LIMITE) {
    alert("Vas muy rápido" + "" + `${VELOCIDAD}/km`)
}else {
    alert("Vas a una velocidad prudente" + "" + `${VELOCIDAD}/km`)
}