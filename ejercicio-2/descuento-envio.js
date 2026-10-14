/* Dado el importe de una compra, calcula el descuento y los gastos de envío según las reglas de la tienda.

Reglas de la tienda: 

Descuento - Más de 100 €: 10 %. 
            Más de 50 € (hasta 100 €): 5 %. 
            50 € o menos: sin descuento. 

Envío - El envío cuesta 4.95 €. 
        Es gratis si el importe, después de aplicar el descuento, es de 50 € o más. 

Total - Importe − descuento + envío 

Datos: una variable importe. Cambia su valor para probar cada caso. 

Resultados esperados: 
 

Importe - Descuento - Importe con descuento - Envío - Total 
30.00€ - 0.00€ - 30.00€ - 4.95€ - 34.95€
52.00€ - 2.60€ - 49.90€ - 4.95€ - 54.35€
75.00€ - 3.75€ - 71.25€ - Gratis - 71.25€
120.00€ - 12.00€ - 108.00€ - Grtais - 108.00€

Fíjate en el caso de 52 €: tiene descuento, pero al aplicarlo baja de 50 € y sí paga envío. Prueba también los casos límite: 50, 50.01, 100 y 100.01. 
*/

const importe = 52;
let descuento = 0;

if (importe >= 0 && importe <= 50) {console.log("Sin descuento"); descuento = 0;}

else if (importe > 50 && importe <= 100) {console.log("5% de descuento"); descuento = importe * 5 / 100;}

else if (importe > 100) {console.log("10% de descuento"); descuento = importe * 10 / 100;}

else {console.log ("Valor no valido");}

const importeConDescuento = (importe - descuento)

const envio = 4.95;

if (importeConDescuento >= 50) {console.log("Gratis");}
else {console.log(importeConDescuento + envio);}