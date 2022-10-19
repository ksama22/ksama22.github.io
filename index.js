var day = 0;
function felizSemana() {
    const d = new Date();
    day = d.getDay()
    console.log("Hoy es ", day);
    switch (day) {
        case 1:
            document.getElementById("lunes").style.display = "block";
            break;
        case 2:
            document.getElementById("martes").style.display = "block";
            break;
        case 3:
            document.getElementById("miercoles").style.display = "block";
            break;
        case 4:
            document.getElementById("jueves").style.display = "block";
            break;
        case 5:
            document.getElementById("viernes").style.display = "block";
            break;
        case 6:
            document.getElementById("sabado").style.display = "block";
            break;
        case 7:
            document.getElementById("domingo").style.display = "block";
            break;
        default:
            console.log("Fuera del bucle");
    }
}


