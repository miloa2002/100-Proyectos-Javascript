
let edad;

while(true) {
    edad = parseInt(prompt("¿En que año naciste?"));

    if(edad > 1910) {
        const result = new Date().getFullYear() - edad;
        alert(`Tienes ${result} años de edad`);
        break;
    }
}
