/*
EJERCICIO 5 — Refactorizar en funciones
Rama: feature/ej5-funciones · Archivo: ejercicio-5/funciones.js
Contenidos: funciones, parámetros, return

Convierte el código de los ejercicios 1 a 4 en funciones reutilizables.
Todas deben devolver su resultado con return; ninguna debe usar
console.log por dentro. Los console.log van fuera, al llamarlas.

Funciones obligatorias:

Función                               | Devuelve                                      | Ejemplo
--------------------------------------|-----------------------------------------------|-----------------------------
calcularImporteLinea(precio, cantidad)| Precio × cantidad                             | (189, 2) → 378
calcularIVA(importe)                  | El 21 % del importe                           | (378) → 79.38
calcularDescuento(importe)            | El descuento según las reglas del ejercicio 2 | (120) → 12
calcularEnvio(importe)                | 4.95 o 0                                      | (49.40) → 4.95
contarAgotados(stock)                 | Número de productos con stock 0               | → 1
productoMasCaro(productos, precios)   | El nombre del producto más caro               | → "Monitor"
valorInventario(precios, stock)       | La suma de precio × stock                     | → 1765.9
buscarProducto(productos, nombre)     | La posición del producto, o -1                | (productos, "Altavoz") → -1

Al final del archivo, llama a cada función al menos dos veces con
datos distintos y muestra el resultado, para demostrar que funcionan.

Estas funciones son las piezas del ejercicio obligatorio. Si aquí
funcionan bien, allí solo tendrás que copiarlas y usarlas.

Mínimo 3 commits por ejercicio preliminar.

------------------------------------------------------------------
Reglas del ejercicio 2 (para calcularDescuento y calcularEnvio):
- Descuento: más de 100 €: 10 %. Más de 50 € (hasta 100 €): 5 %.
  50 € o menos: sin descuento.
- Envío: cuesta 4.95 €. Es gratis si el importe, DESPUÉS de aplicar
  el descuento, es de 50 € o más.
  (Por eso el ejemplo es calcularEnvio(49.40): le pasas el importe
  que ya tiene el descuento quitado.)
*/

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];

const precios = [45.99, 19.90, 189.00, 59.95, 34.50];

const stock = [10, 25, 3, 0, 7];
// IA: me dio el pseudocódigo de esta función y yo lo pasé a JS (ver IA.md, 20/10)
function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}
console.log(calcularImporteLinea(189, 2)); //378
console.log(calcularImporteLinea(15.5, 2)); // 31
console.log(calcularImporteLinea(10, 5)); // 50
