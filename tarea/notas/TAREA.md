# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas para registrar actividades pendientes y organizar mejor mi tiempo.

## Version 1: solo DOM

Agregué la estructura HTML y utilicé querySelector, createElement, textContent y appendChild para mostrar una tarea inicial.

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