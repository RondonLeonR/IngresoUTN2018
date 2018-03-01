//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    var alambre;
    var perimetro;

    largo=parseInt(document.getElementById("largo").value);
    ancho=parseInt(document.getElementById("ancho").value);

    perimetro=largo*2+ancho*2;
    alambre=perimetro*6;

    document.write("Para un perimetro de "+perimetro+" metros se necesitan "+alambre+" metros de alambres");

}

