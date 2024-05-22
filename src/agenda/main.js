// Selecciona elementos del DOM necesarios para la funcionalidad de la lista de tareas
const input = document.querySelector("input"); // Campo de entrada de texto
const addBtn = document.querySelector(".btn-add"); // Botón para agregar tareas
const ul = document.querySelector(".li-container ul"); // Selección del <ul> dentro de la sección contenedora
const empty = document.querySelector(".empty"); // Mensaje que se muestra cuando la lista está vacía

// Agrega un evento de clic al botón de agregar
addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del botón (por ejemplo, si está dentro de un formulario)

  const text = input.value; // Obtiene el texto ingresado

  if (text !== "") {
    // Verifica que el texto no esté vacío
    const li = document.createElement("li"); // Crea un nuevo elemento <li>
    const p = document.createElement("p"); // Crea un nuevo elemento <p>
    p.textContent = text; // Establece el texto del <p> con el valor del input

    li.appendChild(p); // Añade el <p> al <li>
    li.appendChild(addDeleteBtn(li)); // Añade el botón de eliminar al <li> llamando a la función addDeleteBtn
    ul.appendChild(li); // Añade el <li> al <ul>

    input.value = ""; // Limpia el campo de entrada
    empty.style.display = "none"; // Oculta el mensaje de lista vacía
  }
});

// Función para crear un botón de eliminar y un span con la fecha y hora de creación
function addDeleteBtn(li) {
  const deleteBtn = document.createElement("button"); // Crea un nuevo botón
  const creationTimeSpan = document.createElement("span"); // Crea un nuevo span para la fecha y hora de creación

  deleteBtn.textContent = "Eliminar"; // Establece el texto del botón
  deleteBtn.className = "btn-delete"; // Añade una clase al botón para estilo

  // Obtiene la fecha y hora actuales
  const creationDate = new Date();
  creationTimeSpan.textContent = `${creationDate.toLocaleString()}`; // Establece el texto del span con la fecha y hora formateada

  // Añade un evento de clic al botón de eliminar
  deleteBtn.addEventListener("click", (e) => {
    ul.removeChild(li); // Elimina el <li> correspondiente del <ul>

    const items = document.querySelectorAll(".li-container ul li"); // Selecciona todos los <li> dentro del <ul>

    if (items.length === 0) {
      // Verifica si no hay más elementos en la lista
      empty.style.display = "block"; // Muestra el mensaje de lista vacía
    }
  });

  // Crea un contenedor para el botón de eliminar y el span de fecha y hora
  const container = document.createElement("div");
  container.appendChild(deleteBtn); // Añade el botón de eliminar al contenedor
  container.appendChild(creationTimeSpan); // Añade el span de fecha y hora al contenedor

  return container; // Devuelve el contenedor
}