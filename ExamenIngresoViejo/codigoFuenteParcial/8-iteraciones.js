//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num;
    var cantPar = 0;
    var cantNum = 0;
    var numMax;
    var numMin;
    var flag = 0;
    var resp = 'si';
    var repet=0;
    
while(resp=='si')
{
    num = parseInt(prompt("Ingrese numero: "));

    while(!(num  >= 0))
    {
        num = parseInt(prompt("Error. Reingrese numero positivo: "));
    }

    if(num < numMin||flag==0)
    {
        numMin=num;
    }
    else if(num <numMax||flag==0)
    {
        numMax=num;
        flag=1;
    }
       
    if(num/2==0)
    {
        cantPar++;
    }

    cantNum = cantNum + num;

    res = prompt("Desea Continuar?: ('si' o 'no')");

    if (resp=='si')
    {
        repet++;
    }
    else if(resp)
}
promedio = cantNum/ repet;

document.write("La cantidad de numeros pares es: " +cantPar+ "<br>");
document.write("El promedio de todos los numeros ingresados es: " +promedio+ "<br>");
document.write("La suma de todos los numeros es: " +cantNum+ "<br>");
document.write("El numero minimo fue " +numMin+ " y el numero maximo fue " +numMax);

}

