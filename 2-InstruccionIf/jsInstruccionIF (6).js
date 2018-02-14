function Mostrar()
{
//tomo la edad  
var edad

    edad = parseInt(document.getElementById("edad").value);

    if( edad <= 13)
        {
            alert("Usted es un Niño");
        }
    else if( edad >=13 && edad <=17 )
        {
            alert("Usted es un Adolesente");
        }
    else 
        {
            alert("Usted es un Adulto");
        }


}//FIN DE LA FUNCIÓN