//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
    var mes;

    mes=prompt("Ingrese mes del año: ");
    

    switch(mes)
    {
        case("Enero"): case ("Febrero"):
        {
            alert("Veranito!!!!");
            break;
        }
        case("Marzo"):
        case("Abril"):
        case("Mayo"):
        case("Junio"):
        case("Julio"):
        case("Agosto"):
        case("Septiembre"):
        case("Octubre"):
        case("Noviembre"):
        case("Diciembre"):
        {
            alert("extraño enero y febrero!!!");
            break;
        }

    }
}

//mes = mes.toLowercase();