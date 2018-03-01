//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var iva;
    var total;

    importe = parseInt(prompt("Ingrese Importe: "));

    iva = importe*21/100;
    total = importe + iva;

    document.getElementById("importe").value =total;
}

