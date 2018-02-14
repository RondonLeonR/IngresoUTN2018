function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño)
    {
        case 1: case("Julio"): case("Agosto"):
        {
            alert("Abrigate que hace frio");
            break;
        }
        case 2: case("Enero"): case("Febrero"): case("Marzo"): case("Abril"): case("Mayo"): case("Junio"):
        {
            alert("Falta para el invierno");
            break;
        }
        default:
        {
            alert("Ya pasamos el frio, ahora calor!!!.");
            break;
        }
    }






}//FIN DE LA FUNCIÓN