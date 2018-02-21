function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var flag = 0;

	do
	{
		numero = parseInt(prompt("Ingrese Numero"));
		if(numero >1)
		{
			positivo=numero + positivo


		}
		else
		{
			negativo = numero * negativo
			flag=1;			
		}
		
		respuesta = prompt("Desea Continuar? ");

	}while (respuesta == "si");



document.getElementById('suma').value=positivo;

if(flag==0)
{
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN