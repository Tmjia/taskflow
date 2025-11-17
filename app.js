function agregarTarea() {
    let input = document.getElementById("inputTarea");
    let texto = input.value;

    // Evitar tareas vacías
    if (texto.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = texto;

    // agregar al UL
    document.getElementById("lista").appendChild(li);

    input.value = "";
}
