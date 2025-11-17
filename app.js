// HU1: agregar tarea simple
function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const texto = input.value.trim();
    if (texto === "") return;

    const ul = document.getElementById("listaTareas");
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);

    input.value = "";
}
