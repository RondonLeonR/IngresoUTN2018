function Mostrar()
{
var cantPares
var num
var contador = 0;
var i

num = parseInt(prompt("Ingrese Numero: "));

for(i = 1; i <= num; i ++)
{
    if(i % 2 == 0)
    {
        console.log(i);
        contador++;
    }
}

console.log("Se encontraron " +i+ " numeros pares");


}//FIN DE LA FUNCIÓN