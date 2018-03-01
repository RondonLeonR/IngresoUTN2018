//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var base;
var perimetro;


base = parseInt(document.getElementById("lado").value);
perimetro=base*4;

alert("El perimetro del cuadrado es: " +perimetro);
	
}

