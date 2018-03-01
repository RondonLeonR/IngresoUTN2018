//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
    var notaTotal = 0;
    var sexo;
    var promedio;
    var notaBaja;
    var cantVarApr = 0;
    var flag = 0;

    for(var i = 1; i <=6; i++)
    {
        nota=parseInt(prompt("Ingrese Nota: "));
        sexo=prompt("Ingrese sexo('f' o 'm'): ");

        while(!(sexo=='f'||sexo=='m'))
        {
            sexo=prompt("Error. Reingresar sexo('f' o 'm'): ");
        }
            if(sexo=='f'||sexo=='F')
            {
                sexo= "Femenino"
            }
            else 
            {
                sexo = "Masculino"
            }

        while(!(nota>=0 && nota<=10))
        {
            nota=parseInt("Error. Reingrese Nota(entre 0 y 10): ")
        }

        if(nota < notaBaja||flag==0)
        {
            notaBaja=nota;
            flag=1;
        }

        if(sexo=="Masculino"&&nota>=6)
        {
            cantVarApr++;
        }

        notaTotal = notaTotal + nota;

     }

        promedio = notaTotal/6;

        alert("El promedio de todas las notas es: " +promedio);
        alert("La nota mas baja es: " +notaBaja);
        alert(cantVarApr+" fue la cantidad de varones que aprobaron con 6 o mas");
}

