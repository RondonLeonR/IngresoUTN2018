function Mostrar()
{
	// declarar variables	
	var respuesta="si";
	var numero = parseInt(prompt("Ingrese Numero: "));


do
{
		numero = parseInt(prompt("Ingrese Numero: "));

		respuesta= prompt("Desea Continuar? ");
	
}while(respuesta == "si")

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN