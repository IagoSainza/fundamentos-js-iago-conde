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
