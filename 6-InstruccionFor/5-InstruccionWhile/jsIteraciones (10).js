function Mostrar()
{
	var sumNeg = 0;
	var sumPos = 0;
	var cantPos = 0;
	var cantNeg = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promNeg = 0;
	var promPos = 0;
	var diferencia;
	var numero;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese Numero: "));

			if(numero > 0)
			{
				sumPos= numero + sumPos;
				cantPos ++;
			}
				else if(numero <0)
				{
					sumNeg = numero + sumNeg;
					cantNeg ++;
				}
					else
					{
						cantCeros ++;
					}

			if(numero %2==0)
			{
				cantPares ++;
			}	
			
		respuesta = prompt("Desea Continuar? ");
	}while(respuesta == 's');

	diferencia= sumPos - sumNeg;
	promNeg = sumNeg /cantNeg;
	promPos = sumPos /cantPos;

document.write("Suma de los Negativos: " +sumNeg+ "<br/>");
document.write("Suma de los Positivos: " +sumPos+ "<br/>");
document.write("Cantidad de Negativos: " +cantNeg+ "<br/>");
document.write("Cantidad de Positivos: " +cantPos+ "<br/>");
document.write("Cantidad de Ceros: " +cantCeros+ "<br/>");
document.write("Cantidad de Numeros Pares: " +cantPares+ "<br/>");
document.write("Promedio de los Numeros Negativos: " +promNeg+ "<br/>");
document.write("Promedio de los Numeros Positivos: " +promPos+ "<br/>");
document.write("La Diferencia entre los Positivos y los Negativos es: " +diferencia+ "<br/>");


}//FIN DE LA FUNCIÓN