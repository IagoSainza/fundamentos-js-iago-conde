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
