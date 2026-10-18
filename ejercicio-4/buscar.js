/* Dado el nombre de un producto, busca su posición en el catálogo. Si lo encuentra, muestra su posición, su precio y su stock. Si no existe, la posición debe ser -1 y hay que mostrar un aviso.

Datos: los mismos arrays del ejercicio 3 y una variable buscado. */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];

const precios = [45.99, 19.90, 189.00, 59.95, 34.50];

const stock = [10, 25, 3, 0, 7];

const buscado = "Monitor";
let posicion = -1;
for (let i = 0; i < productos.length; i++) {
    // IA: me dio el if de la búsqueda (productos[i] === buscado y posicion = i) y me explicó por qué (ver IA.md, 17/10)
    // Para el reto de las mayúsculas me dio la línea con toLowerCase() en los dos lados (ver IA.md, 18/10)

   if (productos[i].toLowerCase() === buscado.toLowerCase()) {
    posicion = i;
   }
}
if (posicion === -1) {
    console.log(`Posición: -1. ${buscado} no existe en el catálogo`);
} else {
    // IA: me corrigió esta línea (usar posicion fuera del for y el toFixed en el precio) (ver IA.md, 18/10)

    console.log(`${productos[posicion]} está en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)} €. Stock: ${stock[posicion]}`);
}
