// Version 1: mostrar tareas usando el DOM
const lista = document.querySelector("#listaTareas");
const cantidad = document.querySelector("#cantidad");

const tareaInicial = document.createElement("li");
tareaInicial.textContent = "Estudiar JavaScript";
lista.appendChild(tareaInicial);
cantidad.textContent = "1";