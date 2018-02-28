/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;
var precio2;
var precio3;
var total;

precio1=parseFloat(document.getElementById("PrecioUno").value);
precio2=parseFloat(document.getElementById("PrecioDos").value);
precio3=parseFloat(document.getElementById("PrecioTres").value);

total = precio1 + precio2 + precio3;

alert("El total de la suma es : $" +total);

}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var total;

precio1=parseFloat(document.getElementById("PrecioUno").value);
precio2=parseFloat(document.getElementById("PrecioDos").value);
precio3=parseFloat(document.getElementById("PrecioTres").value);

total = (precio1 + precio2 + precio3)/3;

alert("El promedio es: "+total);	
}
function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var total;
var iva;
var suma;

precio1=parseFloat(document.getElementById("PrecioUno").value);
precio2=parseFloat(document.getElementById("PrecioDos").value);
precio3=parseFloat(document.getElementById("PrecioTres").value);	

suma = precio1 + precio2 + precio3;
iva=suma*21/100;
total=suma+iva;
alert("El total mas el IVA es: " +total);
}