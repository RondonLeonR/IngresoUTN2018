function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
    
while(!(sexo=='f'||sexo=='m'||sexo=='F'||sexo=='M'))
{
    sexo = prompt("Dato Invalido. Reingrese sexo.");
}
if(sexo=='f'||sexo=='F')
    {
        sexo= "Femenino"
    }
else 
    {
        sexo = "Masculino"
    }

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN