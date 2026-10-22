const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];

const precios = [45.99, 19.90, 189.00, 59.95, 34.50];

const stock = [10, 25, 3, 0, 7];

const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];

// ===== FUNCIONES (del ejercicio 5) =====
// IA: estas funciones las hice en el ejercicio 5 con el pseudocódigo y las correcciones de la ia (ver IA.md, 20/10).
// Aquí me dijo que copiara solo las 5 que pide el obligatorio, sin sus console.log de prueba (ver IA.md, 21/10)

function buscarProducto(productos, nombre){
    let posicion = -1;
    for (let i = 0; i < productos.length; i++){
        if (productos[i] === nombre){
            posicion = i;
        }
    }
    return posicion;
}

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

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

function calcularIVA(importe){
    return importe * 21 / 100;
}

function calcularEnvio(importe){
    if (importe >= 50){
        return 0;
    }
    else {
        return 4.95;
    }
}
// IA: este bucle viene del ejercicio 3, donde me escribió la línea del AGOTADO como ejemplo (ver IA.md, 16/10).
// Aquí me dijo que lo copiara sin el contador de agotados porque eso va al final con el stock actualizado (ver IA.md, 21/10)
console.log("=== CATÁLOGO ===");
for (let i = 0; i < productos.length; i++) {
    
if (stock[i] === 0) {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`)
}else {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`)
}}
// IA: me explicó que se crean los arrays del ticket vacíos aquí, antes del for, y se llenan con .push() en el else de abajo.
// Me corrigió los push: van servidas (no cantidad) y precios[posicion] (no el array entero) (ver IA.md, 22/10)
const ticketProductos = [];
const ticketCantidades = [];
const ticketPrecios = [];
// IA: me dio el pseudocódigo y me explicó la diferencia entre i (la línea del pedido) y posicion (dónde está en el catálogo).
// Me corrigió pedidoProductos.length, el [i], la cantidad, los === y los mensajes con ${} (ver IA.md, 22/10)
console.log("=== PROCESANDO PEDIDO ===")
for (let i = 0; i < pedidoProductos.length; i++){ 
    const nombre = pedidoProductos[i]
    const cantidad = pedidoCantidades[i]
    const posicion = buscarProducto(productos, nombre)

    if (posicion === -1){
        console.log (`AVISO: ${nombre} no existe en el catálogo`);
    }
    else if (stock[posicion] === 0){
        console.log (`AVISO: ${nombre} está agotado`);
    }
    // IA: me dio el pseudocódigo y me corrigió: stock[posicion] en vez de stock, crear servidas fuera del if,
    // y que para restar el stock es una asignación sin let ni ${} (ver IA.md, 22/10)
    else {
         let servidas = cantidad;
        if (cantidad > stock[posicion]){
            servidas = stock[posicion];
            console.log (`AVISO: solo hay ${servidas} uds de ${nombre}, se sirven ${servidas}`)
        }
        else {
            console.log(`OK: ${cantidad} x ${nombre}`)
        }
        stock[posicion] = stock[posicion] - servidas;
        ticketProductos.push(nombre);
        ticketCantidades.push(servidas);
        ticketPrecios.push(precios[posicion]);
    }
}
// IA: me dio el pseudocódigo para recorrer el ticket y sumar el subtotal.
// Me corrigió el toFixed dentro del ${}, el importe que había puesto como precio, el let que sobraba en subtotal y la comilla sin cerrar (ver IA.md, 22/10)
console.log(`=== TICKET ===`);
let subtotal = 0;
for (let i = 0; i < ticketProductos.length; i++){
    const importe = calcularImporteLinea(ticketPrecios[i], ticketCantidades[i])
    console.log(`${ticketCantidades[i]} x ${ticketProductos[i]} (${ticketPrecios[i].toFixed(2)} €) = ${importe.toFixed(2)} €`)
    subtotal = subtotal + importe;
}
console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
// IA: me dio el pseudocódigo y las reglas de sobre qué se calcula cada cosa (descuento sobre el subtotal, IVA y envío sobre la base).
// Me explicó que el - del descuento es solo texto, y me corrigió el € dentro del ${}, los tofixed en minúscula y el if para mostrar Gratis (ver IA.md, 22/10)
const descuento = calcularDescuento(subtotal);
const base = subtotal - descuento;
const iva = calcularIVA(base);
const envio = calcularEnvio(base);
const total = base + iva + envio;
console.log(`Descuento: -${descuento.toFixed(2)} €`);
console.log(`Base imponible: ${base.toFixed(2)} €`);
console.log(`IVA (21%): ${iva.toFixed(2)} €`)
if (envio === 0){
    console.log(`Envio: Gratis`)
}
else {
    console.log(`Envio: ${envio.toFixed(2)} €`)
}
console.log(`TOTAL: ${total.toFixed(2)} €`)