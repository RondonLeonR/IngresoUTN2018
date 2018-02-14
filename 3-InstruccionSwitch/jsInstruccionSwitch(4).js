function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
    {
        case ("Febrero"):
        {
            alert("Este mes tiene 28 Dias");
            break;
        }
        case 1: case ("Abril"): case("Junio"): case("Septiembre"): case("Noviembre"):
        {
            alert("Este mes tiene 30 Dias");
            break;
        }
        default:
        {
            alert("Este mes tiene 31 Dias");
            break;
        }
    }
	
	



}//FIN DE LA FUNCIÓN