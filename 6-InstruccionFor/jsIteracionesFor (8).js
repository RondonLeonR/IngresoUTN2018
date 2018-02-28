function Mostrar()
{
var num;
var numPrimo;
var contador = 0;

num = parseInt(prompt("Ingrese Numero: "));

for(i = 1 ; i <=num;i++)
{
    if(num%i==0)
    {
        contador++;
    }

}
if(contador == 2)
{
    alert("Es un numero primo")
    
}
    else
    {
        alert("No es un numero Primo");
    }






}//FIN DE LA FUNCIÓN