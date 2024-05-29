document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const phaseCountInput = document.getElementById("phaseCount");
  const ul = document.querySelector(".li-container ul");
  const empty = document.querySelector(".empty");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = taskInput.value.trim();
    const phaseCount = parseInt(phaseCountInput.value.trim(), 10);

    if (text !== "" && phaseCount >= 0) {
      const taskItem = {
        text: text,
        phases: [],
        creationDate: new Date().toLocaleString(), // Fecha de creación
      };

      // Utilizamos SweetAlert2 para capturar el texto de cada fase
      const getPhaseText = async (index) => {
        const { value: phaseText } = await Swal.fire({
          title: `Ingrese fase ${index + 1} de "${text}"`,
          input: "text",
          inputPlaceholder: "Texto de la fase",
          inputValidator: (value) => {
            if (!value.trim()) {
              return "Debe ingresar fase";
            }
          },
        });
        return phaseText;
      };

      // Promesa que captura el texto para todas las fases
      const capturePhases = async () => {
        for (let i = 0; i < phaseCount; i++) {
          const phaseText = await getPhaseText(i);
          taskItem.phases.push(phaseText);
        }
      };

      // Ejecutamos la función para capturar fases y luego agregamos la tarea a la lista
      capturePhases().then(() => {
        addTaskToList(taskItem);
        taskInput.value = "";
        phaseCountInput.value = "";
        empty.style.display = "none";
      });
    }
  });

  function addTaskToList(taskItem) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = taskItem.text;

    const creationDateSpan = document.createElement("span");
    creationDateSpan.textContent = `Creada el ${taskItem.creationDate}`;

    const phasesUl = document.createElement("ul");
    taskItem.phases.forEach((phaseText) => {
      const phaseLi = document.createElement("li");
      phaseLi.textContent = phaseText;
      phasesUl.appendChild(phaseLi);
    });

    li.appendChild(p);
    li.appendChild(creationDateSpan); // Añadimos la fecha de creación
    li.appendChild(phasesUl);
    li.appendChild(addDeleteBtn(li));
    ul.appendChild(li);
  }

  function addDeleteBtn(li) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", () => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede revertir.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          ul.removeChild(li);
          if (ul.children.length === 0) {
            empty.style.display = "block";
          }
          Swal.fire("Eliminado!", "La tarea ha sido eliminada.", "success");
        }
      });
    });

    return deleteBtn;
  }
});
