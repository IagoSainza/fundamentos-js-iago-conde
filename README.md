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
