# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas para registrar actividades pendientes y organizar mejor mi tiempo.

## Version 1: solo DOM

Agregué la estructura HTML y utilicé querySelector, createElement, textContent y appendChild para mostrar una tarea inicial.

```js
const tareaInicial = document.createElement("li");
tareaInicial.textContent = "Estudiar JavaScript";
lista.appendChild(tareaInicial);