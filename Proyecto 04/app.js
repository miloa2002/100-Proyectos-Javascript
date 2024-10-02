
const SUELDO = parseInt(prompt("¿Cuál es tu sueldo?"));

switch (SUELDO) {
    case 400:
        document.write("Es un sueldo muy malo");
    break;

    case 900:
        document.write("Es un sueldo muy bueno");
    break;

    default:
        document.write("Eres estudiante");
    break;
}