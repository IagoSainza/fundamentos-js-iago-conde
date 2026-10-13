/* Un cliente compra varias unidades de un producto. Calcula el subtotal, el IVA y el total, y muéstralo como un ticket. 

Datos: 

const producto = "Monitor"; 

const precio = 189;      // precio por unidad, sin IVA 

const cantidad = 2; 

const porcentajeIva = 21; 

Qué tiene que hacer: 

1.Calcular el subtotal (precio × cantidad). 

2.Calcular el IVA sobre el subtotal y el total (subtotal + IVA). 

3.Mostrar todos los importes con 2 decimales usando .toFixed(2). 

Resultado esperado: 

Producto: Monitor 

2 x 189.00 € 

Subtotal: 378.00 € 

IVA (21%): 79.38 € 

TOTAL: 457.38 € 

Prueba también con otros datos (por ejemplo, 3 unidades de un ratón a 19.90 €) y comprueba el resultado con la calculadora.  */

const producto = "Monitor";
const precio = 189;
const cantidad = 2;

const porcentajeIva = 21; 

const subtotal = precio * cantidad;
console.log(subtotal);
// IA: me recordó usar el 21 del enunciado y dividir entre 100 (ver IA.md, 13/10)
const iva = subtotal * porcentajeIva / 100;
console.log(iva);

const total = subtotal + iva;
console.log(total);
