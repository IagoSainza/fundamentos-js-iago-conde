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
// IA: me dio el pseudocódigo y me corrigió los parámetros (tenía dos y era uno) (ver IA.md, 20/10)
function calcularIVA(importe){
    return importe * 21 / 100;
}
console.log(calcularIVA(378)); //79.38
console.log(calcularIVA(100)); //21
// IA: me dio el pseudocódigo y me corrigió el ; después del if y el else sin paréntesis (ver IA.md, 20/10)
function calcularDescuento(importe){
    if (importe > 100){
        return importe * 10 / 100;
    }
    else if (importe > 50){
        return importe * 5 / 100;
    }
    else {
        return 0;
    }
}
console.log(calcularDescuento(120)); //12
console.log(calcularDescuento(100)); //5
console.log(calcularDescuento(50)); //0
// IA: me dio el pseudocódigo de esta función y yo lo pasé a JS (ver IA.md, 20/10)
function calcularEnvio(importe){
    if (importe >= 50){
        return 0;
    }
    else {
        return 4.95;
    }
}
console.log(calcularEnvio(49.40)); //4.95
console.log(calcularEnvio(50)); //0
console.log(calcularEnvio(108)); //0
// IA: me dio el pseudocódigo y me corrigió: quitar los console.log del ej. 3, usar stock.length, el return que faltaba y que agotados va sin [i] (ver IA.md, 20/10)
function contarAgotados(stock){
    let agotados = 0;
    for (let i = 0; i < stock.length; i++){
        if (stock[i] === 0){
            agotados = agotados +1;
        }
    }
    return agotados;
}
console.log(contarAgotados(stock)); //1
console.log(contarAgotados([0, 5, 0, 2])); //2