function Mostrar()
{

var numero =parseInt(prompt("Ingrese un número entre 0 y 9."));

while (numero <0 || numero >9 || isNaN(numero))
	{
		alert("Dato invalido. Ingrese nuevamente");
		numero =parseInt(prompt("Ingrese un número entre 0 y 9."));
	}

	document.getElementById("Numero").value = numero
		
}//FIN DE LA FUNCIÓN