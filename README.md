# fundamentos-js-iago-conde

# Fundamentos JS · Iago Conde

## Ejercicio 1 · Ticket de un producto

- Para ejecutarlo: `node ejercicio-1/ticket.js`

- Primero copié todos los datos del título para verlo de forma mas clara e ir transformándolo en codigo.
- Me guié de la estructura de los ejercicios de clase con operadores para ir resolviendo el ejercicio.
- Usé los const para evitar los números mágicos y ``console.log(`${}`)``; para que se viera en el ticket textualmente como pide el ejercicio deforma que salga el "titulo" con su determinada cantidad.
- Puse el IVA con 0.21 para calcularlo como en clase pero de esa forma en el ticket saldría 0.21% en lugar de 21% de IVA, también me confundí al principio poniendo el 21% de forma textual y posteriormente lo cambie por el formato de ${} para evitar problemas si el iva cambiara.
- Hice una primera prueba con console.log con cada parte para ir viendo si el resultado estaba correcto y ahí es cuando me di cuenta de que no me salían los decimales, me ponía 7938 en lugar de 79,38 porque me olvidé de dividir entre 100 y también me di cuenta de que me faltaba poner toFixed(2).
- La ia por el momento la estoy usando sobre todo para que me revise el ejercicio y me explique los errores para poder ir aprendiendo en el momento.
- Por último me olvidé de hacer este readme y commit antes de hacer el merge con main por lo que se verá en el inicio de la rama del ej 2.

## Ejercicio 2 · Descuento y Envio

- Para ejecutarlo: `node ejercicio-2/descuento-envio.js`
- Me olvidé de comentar que para ir subiendo todo de forma separada en lugar de poner Git add . pongo Git add readme.md.. etc
- Despues de copiar el enunciado para tener todo mas a mano y claro empecé poniendo el const con la cantidad para poder hacer el calculo.
- Después hice una primera presentación de if y else poniendo en console.log de forma textual los descuentos para ir visualizando que todo funcione.
- Al hacer la comprobación con 100 me di cuenta de que me fallaba porque al no haber puesto el igual me salía como valor no valido.
- Hice el codigo para los envíos pero el envío se calculaba con el importe original y no con el importe despues del descuento, con el 52 me salía gratis y por eso me di cuenta.
- Hice los cambios pertinentes para poder obtener el importe con descuento.
- Para calcular el descuento usé la misma formula que la usada en el ej.1 con el iva.
- Me bloqueé con los gastos de envío y la IA me explicó que solo guardan 0 o 4.95 (ver IA.md)
- Despues de calcular los gastos de envío hice el console.log para que salgan todos los datos reflejados en el orden correcto como se pide, también agregué const y nombres a los descuentos por si en el futuro cambiaran.

## Ejercicio 3 · Explorar el catálogo.

- Para ejecutarlo: `node ejercicio-3/catalogo.js`
- Le pedí a la IA que me diera el pseudocodigo como apoyo.
- Me lo tuvo que explicar bien la ia y mirar mis apuntes, sinceramente sin la ia no habría conseguido hacer el ejercicio.
- Los productos, precios y stock estan en tres arrays y cada producto esta en la misma posicion en los tres, por eso use un for con la i para ir recorriendo los tres a la vez.
- Lo que mas me costó fue el console.log del catalogo porque no sabia bien que iba dentro de ${} y que iba fuera, la ia me escribió la linea del AGOTADO de ejemplo y con eso hice yo la de las unidades, ahi entendí que dentro van las variables y fuera el texto.
- Para contar los agotados empecé el contador en 0 y le sumo 1 cada vez que el stock es 0, al principio puse i++ en vez de sumarle al contador y me di cuenta de que la i es la que va pasando por los productos y no hay que tocarla.
- Con el producto mas caro me lié porque puse el if fuera del bucle y no funcionaba, la ia me explicó que tiene que ir dentro porque usa la i y me dio el bloque. Se guarda la posicion del mas caro y no el precio porque con la posicion saco el nombre y el precio.
- El valor del inventario lo hice yo, empieza en 0 y en cada vuelta suma el precio por el stock de cada producto, los agotados suman 0 solos.

## Ejercicio 4 · Buscar un producto.

- Para ejecutarlo: `node ejercicio-4/buscar.js`
- Le pedí a la ia el pseudocodigo y despues uno mas detallado que me dijera linea a linea que iba en el codigo, porque con el primero no me aclaraba.
- Al principio puse el -1 en la i del for en vez de en posicion, la ia me explicó que la i siempre empieza en 0 porque es la que recorre los productos, y que posicion empieza en -1 porque significa que todavia no lo he encontrado, si empezara en 0 no sabria si es que no está o si es el Teclado que está en la posicion 0.
- Dentro del for primero copié la suma del inventario del ejercicio 3 y despues comparaba posicion con buscado y guardaba buscado[i], la ia me dio las dos lineas del if y me explicó que hay que comparar el nombre de cada producto con el que busco y guardar la i, que es el numero de la posicion.
- No entendia como funcionaba el if y else del final, la ia me puso un ejemplo de un cine con un asiento y ahi entendí que el if pregunta una sola vez y el ${} escribe lo que ya está guardado en la variable, con eso escribí yo el if y else del ejercicio.
- Me liaba con los [] porque los ponia en todo, me di cuenta de que solo van en los arrays y que fuera del for la i ya no existe, por eso se usa posicion para sacar el precio y el stock. Tambien me equivoqué y puse el toFixed(2) en el stock en vez de en el precio.
- Hice el reto opcional de las mayusculas poniendo toLowerCase() en los dos lados de la comparacion, por eso ahora monitor y MONITOR tambien encuentran el Monitor aunque en la tabla del enunciado ponga -1, y en el resultado pongo el nombre como está en el catalogo.

## Ejercicio 5 · Refactorizar en funciones.

- Para ejecutarlo: `node ejercicio-5/funciones.js`
- En este ejercicio cogí lo que ya tenia hecho en los ejercicios 1 a 4 y lo metí en funciones, para poder usarlo con datos distintos sin repetir el codigo. Son las 8 funciones que pide el enunciado y todas devuelven el resultado con return, ninguna tiene console.log dentro, los console.log van fuera cuando las llamo.
- Primero pegué el enunciado y los tres arrays del ejercicio 3 y despues hice un commit por cada funcion que me funcionaba.
- Le pedí a la ia el pseudocodigo de cada funcion y yo lo iba pasando a JS, y cuando algo fallaba me explicaba el error.
- Cada funcion la llamo minimo dos veces con datos distintos y al lado puse un comentario con lo que tiene que dar para comprobarlo. Algunas pruebas las hice con arrays inventados, como los precios de unos juegos, para ver que funcionan con cualquier lista y no solo con la de la tienda.
- En calcularIVA puse dos parametros pero al llamarla solo le pasaba uno y me salia NaN. Despues quité el segundo de los parentesis pero se me quedó porcentajeIva dentro del return y daba error porque ya no existia, al final puse el 21 directamente porque siempre es el mismo.
- En calcularDescuento me dejé un ; despues del if y eso hace que el if no sirva para nada, puse >= cuando la regla dice "mas de 100" y le puse parentesis al else, que no lleva. Aprendí que se puede poner un return en cada camino del if porque cuando llega a uno la funcion se acaba ahi.
- En calcularEnvio la regla es "50 o mas" asi que aqui si va >=. Hay que pasarle el importe que ya tiene el descuento quitado, por eso el ejemplo del enunciado es 49.40.
- En contarAgotados me quedé en blanco y copié el for del ejercicio 3 con los console.log. Tambien recorria productos.length en vez de stock.length, se me olvidó el return y luego puse agotados[i] cuando agotados es un numero y no un array, y la i fuera del for ya no existe.
- En productoMasCaro al probarla le pasaba "Monitor" en vez de los arrays, me di cuenta de que Monitor es lo que tiene que devolver, no lo que le paso. Igual que en el ej 3 guardo la posicion y no el precio porque con la posicion saco el nombre.
- En valorInventario me lié bastante, puse la suma dentro del parentesis del for en vez del i++ y un if que no hacia falta. Me ayudó compararla con contarAgotados porque es casi igual pero sumando precio por stock en vez de 1.
- En buscarProducto volví a empezar el for en -1 en vez de 0 como en el ej 4 y puse = en vez de ===. Me di cuenta de que = guarda un valor y === compara. Aqui no puse el toLowerCase() del reto porque no lo pide.
- Lo que mas me ha servido es entender que el return devuelve el valor para usarlo fuera y el console.log solo lo enseña, y que estas funciones son las piezas del obligatorio.

## Ejercicio obligatorio · Tienda online en consola.

- Para ejecutarlo: `node obligatorio/tienda.js`
- Le pedí a la ia que me dividiera el enunciado en pasos pequeños y fui haciendo un commit por cada paso que funcionaba.
- Primero copié los datos del enunciado y las 5 funciones del ejercicio 5 que pide el obligatorio (buscarProducto, calcularImporteLinea, calcularDescuento, calcularIVA y calcularEnvio), sin sus console.log de prueba. Despues copié el for del catalogo del ejercicio 3 sin el contador de agotados.
- Para procesar el pedido recorro pedidoProductos con un for y en cada vuelta busco el producto en el catalogo con buscarProducto. Lo que mas me costó entender es que hay dos posiciones: la i es la linea del pedido y posicion es donde esta el producto en el catalogo, por eso el stock y el precio se miran con [posicion] y no con [i]. Me equivoqué muchas veces poniendo stock en vez de stock[posicion].
- El orden de los if importa: primero miro si no existe (posicion -1), luego si esta agotado y si no, se sirve. Si no comprobara primero el -1 estaria mirando stock[-1].
- Dentro del else puse otro if para ver si piden mas de lo que hay. Empiezo servidas con la cantidad que piden y si no hay bastante la cambio por lo que hay en stock, asi el Monitor se sirven 3 aunque pidan 4. Despues resto las servidas al stock. Me lié con el let, al principio lo ponia otra vez delante de stock y creaba otra variable.
- Para el ticket creé tres arrays vacios antes del for y con .push() voy guardando solo lo que se sirve: el nombre, las unidades servidas (no las pedidas) y el precio del catalogo. Despues los recorro con otro for, calculo el importe de cada linea con calcularImporteLinea y voy sumando el subtotal.
- El descuento se calcula sobre el subtotal, y el IVA y el envio sobre la base imponible (subtotal menos descuento). Primero hice todos los calculos y despues todos los console.log. Me confundí pensando que el - del descuento tenia que restar algo, pero es solo texto para el ticket. El envio lleva un if para que ponga Gratis cuando es 0.
- Para los agotados del final uso un array vacio y le hago .push() de los productos que tienen stock 0, y los muestro con .join(", ") que la ia me explicó que junta todo en un texto separado por comas.
- Hice la segunda prueba del enunciado cambiando el pedido a 1 Ratón y salió subtotal 19.90 €, IVA 4.18 €, envio 4.95 € y total 29.03 €, igual que en el enunciado. Despues volví a dejar el pedido original.
- Errores que tuve varias veces: poner = en vez de ===, el toFixed fuera del ${} o escrito en minuscula, y olvidarme de guardar el archivo antes de ejecutarlo.
