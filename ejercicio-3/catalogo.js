/* **Contenidos:** bucles, arrays, patrones acumulador, contador y máximo

La tienda guarda su catálogo en **tres arrays paralelos**: la misma posición en los tres arrays corresponde al mismo producto. Por ejemplo, `productos[2]` cuesta `precios[2]` y le quedan `stock[2]` unidades.
### Datos

```javascript
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];
```

### Qué tiene que hacer

1. **Mostrar el catálogo:** una línea por producto con su precio y sus unidades. Si el stock es 0, muestra **AGOTADO**.
2. **Contar** cuántos productos están agotados.
3. **Encontrar el producto más caro** y mostrar su **nombre** y su precio.
4. **Calcular el valor total del inventario:** la suma de precio × stock de todos los productos.

### Resultado esperado

```
Teclado - 45.99 € (10 uds)
Ratón - 19.90 € (25 uds)
Monitor - 189.00 € (3 uds)
Auriculares - 59.95 € (AGOTADO)
Webcam - 34.50 € (7 uds)

Productos agotados: 1
Producto más caro: Monitor (189.00 €)
Valor del inventario: 1765.90 €
Pista: para mostrar el nombre del más caro, guarda la posición del máximo, no solo el precio.
*/

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];

const precios = [45.99, 19.90, 189.00, 59.95, 34.50];

const stock = [10, 25, 3, 0, 7];
// IA: le pedí el pseudocodigo como apoyo. (ver IA.md, 16/10)
for (let i = 0; i < productos.length; i++) {
if (stock[i] === 0) {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`)
}else {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`)
}}