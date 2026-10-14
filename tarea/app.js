// Version 3: clases y objetos
const lista = document.querySelector("#listaTareas");
const cantidad = document.querySelector("#cantidad");
const formulario = document.querySelector("#formTarea");
const textoTarea = document.querySelector("#textoTarea");
const mensaje = document.querySelector("#mensaje");

// Clase propia con atributos y metodos
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
        li.className = "tarea";

        const texto = document.createElement("span");
        texto.textContent = this.texto;

        const completar = document.createElement("button");
        completar.textContent = "Completar";

        const borrar = document.createElement("button");
        borrar.textContent = "Borrar";

        completar.addEventListener("click", () => {
            this.alternarEstado();
            texto.classList.toggle("completada", this.completada);
            completar.textContent = this.completada ? "Deshacer" : "Completar";
        });

        borrar.addEventListener("click", () => {
            li.remove();
            actualizarCantidad();
            mensaje.textContent = "Tarea eliminada.";
        });

        li.appendChild(texto);
        li.appendChild(completar);
        li.appendChild(borrar);

        return li;
    }
}

function actualizarCantidad() {
    cantidad.textContent = lista.children.length;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = textoTarea.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    const tarea = new Tarea(texto);
    lista.appendChild(tarea.crearElemento());

    textoTarea.value = "";
    mensaje.textContent = "Tarea agregada correctamente.";
    actualizarCantidad();
});

textoTarea.addEventListener("input", () => {
    mensaje.textContent = "";
});

document.querySelector("h1").addEventListener("click", () => {
    mensaje.textContent = "¡Organiza tus tareas!";
});