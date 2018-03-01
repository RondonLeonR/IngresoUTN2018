//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ventaMay;
    var ventaMen;
    var importe;
    var flag=0;

    
    for(var num = 1; num <= 7;num++)
    {
        importe=parseFloat(prompt("Ingrese importe de venta: "));

        while(importe<=0)
        {
            importe = parseFloat(prompt("Error. El importe de venta debe ser mayor a 0. Reingrese importe:"));    
        }
        if(importe>ventaMay||flag==0)
        {
            ventaMay=importe;
        }
        if(importe<ventaMen||flag==0)
        {
            ventaMen=importe;
            flag=1;
        }

    }

    document.write("El mayor importe es: "+ventaMay+"<br>");
    document.write("El menor importe es: "+ventaMen+"<br>");
}

