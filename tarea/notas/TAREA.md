# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas para organizar actividades pendientes y controlar cuáles ya terminé.

## Version 1: solo DOM

**Qué agregué:** una tarea inicial creada con JavaScript.

**Por qué:** para practicar la selección y creación de elementos del DOM.

```js
const tareaInicial = document.createElement("li");
tareaInicial.textContent = "Estudiar JavaScript";
lista.appendChild(tareaInicial);

## Version 2: con eventos

Agregué los eventos submit, click e input. Ahora el usuario puede registrar tareas, marcarlas como completadas y eliminarlas. También incorporé una validación para evitar tareas vacías.

```js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (textoTarea.value.trim() === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }
});
```

##  Version 2: con eventos
**Qué agregué:** eventos submit, click e input, botones para completar y borrar, y validación del texto.

**Por qué:** para permitir que el usuario interactúe con la lista.

**Cambio en la página:**
```js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (textoTarea.value.trim() === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }
});
```

##  Version 3: con clases y objetos
**Qué agregué:** la clase Tarea, sus atributos texto y completada, y los métodos alternarEstado() y crearElemento().

**Por qué:** para organizar los datos y el comportamiento de cada tarea en un objeto.

**Cambio en la página:** cada tarea tiene su propio estado y puede marcarse como completada o eliminarse.

```js
class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
    }

    alternarEstado() {
        this.completada = !this.completada;
    }

    crearElemento() {
        const li = document.createElement("li");
        li.textContent = this.texto;
        return li;
    }
}
```

## Donde uso DOM, eventos y objetos

| Elemento | Parte del código | Función |
|---|---|---|
| DOM | `querySelector`, `createElement`, `appendChild` y `remove` | Seleccionar, crear, agregar y eliminar elementos. |
| Eventos | `submit`, `click` e `input` | Responder a las acciones del usuario. |
| Objetos | `new Tarea(texto)` | Crear una tarea con sus propios datos. |
| Clase | `class Tarea` | Definir atributos y métodos. |
| Validación | `texto.trim() === ""` | Evitar tareas vacías y mostrar un mensaje. |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | Cumple |
|---|---|---|---|
| Agregar una tarea válida | La tarea aparece en la lista. | La tarea aparece en la lista. | Sí |
| Enviar el campo vacío | Aparece un mensaje de error. | Aparece un mensaje de error. | Sí |
| Marcar una tarea | El texto aparece tachado. | El texto aparece tachado. | Sí |
| Deshacer una tarea completada | El texto deja de estar tachado. | El texto deja de estar tachado. | Sí |
| Borrar una tarea | La tarea desaparece y se actualiza el contador. | La tarea desaparece y se actualiza el contador. | Sí |