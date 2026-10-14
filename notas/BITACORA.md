# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde la consola | Cambio el titulo temporalmente | No |
| textContent desde app.js | El titulo muestra Hola TECSUP | Si |
| style.color | El titulo se muestra en azul | Si |
| classList.add | El mensaje tiene fondo amarillo claro | Si |
| createElement + appendChild | Se agrego JavaScript a la lista | Si |

## Ejercicio 3: Evento click
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic en el boton | 1 |
| dblclick | Un doble clic en el boton | 1 por cada doble clic |
| mouseover | Pasar el cursor sobre el boton | 1 por cada vez que se activa |

`evento.type` muestra el tipo de evento que ocurrió, por ejemplo, `click`. `evento.target` muestra el elemento HTML que recibió el evento, en este caso, el botón Sumar 1.

## Ejercicio 4: Eventos input y submit
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo cambia mientras escribo | No |
| Enviar sin preventDefault | El formulario recarga la pagina | Si |
| Enviar con preventDefault, correo sin @ | Aparece el mensaje de error | No |
| Enviar con preventDefault, correo con @ | Aparece el mensaje de enviado | No |

## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|---|---|---:|---|---:|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510.00 |

Una clase permite crear varios objetos con las mismas propiedades y metodos. En este ejercicio, Producto permite guardar el nombre y precio de cada producto, calcular descuentos y mostrar su descripcion.

## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Resultado esperado |
|---|---|
| Agregar Cuaderno a S/ 12.50 | Total: S/ 12.50 |
| Agregar Lapicero a S/ 3.20 | Total: S/ 15.70 |
| Agregar Mochila a S/ 89.90 | Total: S/ 105.60 |

| Componente | Uso en el ejercicio |
|---|---|
| DOM | Muestra los productos y el total en la pagina |
| Evento | submit permite agregar productos al carrito |
| Objeto | Cada producto guarda su nombre y precio |
| Clase Carrito | Administra los productos y calcula el total |
| Number() | Convierte el precio ingresado a numero |