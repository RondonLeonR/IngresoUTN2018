function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
 
while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese el numero."));
		acumulador = acumulador + numero
		contador ++;

		respuesta = prompt("Desea Continuar? (si)o(no). ");
	}	

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN