function Mostrar()
{
//tomo la edad  
var edad

edad = parseInt(document.getElementById("edad").value);
//Manera numero 1 de hacer.
if(edad <13 || edad >17)
    {
        alert("No eres un adolecente");
    }

}//FIN DE LA FUNCIÓN


// La manera num 2 de hacer.
//if(!(edad >=13 && edad <=17));