// Version 2: agregar eventos
const lista = document.querySelector("#listaTareas");
const cantidad = document.querySelector("#cantidad");
const formulario = document.querySelector("#formTarea");
const textoTarea = document.querySelector("#textoTarea");
const mensaje = document.querySelector("#mensaje");

let total = 0;

function actualizarCantidad() {
    cantidad.textContent = lista.children.length;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (textoTarea.value.trim() === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    const li = document.createElement("li");
    li.className = "tarea";

    const texto = document.createElement("span");
    texto.textContent = textoTarea.value;

    const completar = document.createElement("button");
    completar.textContent = "Completar";

    const borrar = document.createElement("button");
    borrar.textContent = "Borrar";

    completar.addEventListener("click", () => {
        texto.classList.toggle("completada");
    });

    borrar.addEventListener("click", () => {
        li.remove();
        actualizarCantidad();
    });

    li.appendChild(texto);
    li.appendChild(completar);
    li.appendChild(borrar);
    lista.appendChild(li);

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