let books = [
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    genre: "Fiction",
    image:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/f4/bc/f4bc25288107cfebe6a9cbc1e245c00a.jpg",
    questions: [
      "¿Quién es el autor del libro?",
      "¿En qué planeta vivía el principito?",
      "¿Cuál es el tema principal del libro?",
    ],
  },
  {
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/b5/1a/b51a9baa4e59e89a3578cb224e1f1d81.jpg",
    questions: [
      "¿Quién escribió el libro?",
      "¿De qué trata principalmente el libro?",
      "¿Qué periodo histórico cubre el libro?",
    ],
  },
  {
    title: "Breve historia del tiempo",
    author: "Stephen Hawking",
    genre: "Science",
    image:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/c1/d5/c1d562eb8d27c7af22c9f981f4de04f1.jpg",
    questions: [
      "¿Quién es el autor del libro?",
      "¿Cuál es el tema principal del libro?",
      "¿Qué teoría científica se explica en el libro?",
    ],
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: "Biography",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/39/6b/396bd03f203c23193b40fca63959e12f.jpg",
    questions: [
      "¿Quién escribió la biografía?",
      "¿De quién es la biografía?",
      "¿Cuál fue una de las empresas más importantes que fundó Steve Jobs?",
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    image:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/cd/98/cd98b8ec87bf3636c6d3e9019d794bba.jpg",
    questions: [
      "¿Quién es el autor del libro?",
      "¿Cuál es el tema principal del libro?",
      "¿En qué año fue publicado el libro?",
    ],
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/93/03/93031b82b34766029292983bf50afe65.jpg",
    questions: [
      "¿Quién escribió el libro?",
      "¿De qué trata principalmente el libro?",
      "¿Cuál es el nombre del autor?",
    ],
  },
];

for (let i of books) {
  // Crear tarjeta
  let card = document.createElement("div");
  // La tarjeta debe tener la clase del género y debe estar oculta inicialmente
  card.classList.add("card", i.genre, "hide");
  // Div de imagen
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Etiqueta de imagen
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Contenedor
  let container = document.createElement("div");
  container.classList.add("container");
  // Título del libro
  let title = document.createElement("h5");
  title.classList.add("book-title");
  title.innerText = i.title;
  container.appendChild(title);
  // Autor del libro
  let author = document.createElement("p");
  author.classList.add("book-author");
  author.innerText = "Autor: " + i.author;
  container.appendChild(author);

  card.appendChild(container);
  document.getElementById("books").appendChild(card);

  // Agregar evento click para mostrar la prueba
  card.addEventListener("click", () => {
    showQuiz(i.title, i.questions);
  });
}

// Parámetro pasado desde el botón (el parámetro es igual que el género)
function filterBook(value) {
  // Seleccionar todas las tarjetas
  let elements = document.querySelectorAll(".card");
  // Recorrer todas las tarjetas
  elements.forEach((element) => {
    // Mostrar todas las tarjetas al hacer clic en el botón 'Todos'
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // Verificar si el elemento contiene la clase de género
      if (element.classList.contains(value)) {
        // Mostrar elemento basado en el género
        element.classList.remove("hide");
      } else {
        // Ocultar otros elementos
        element.classList.add("hide");
      }
    }
  });
}

// Hacer clic en el botón de búsqueda
document.getElementById("search").addEventListener("click", () => {
  // Inicializaciones
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".book-title");
  let cards = document.querySelectorAll(".card");

  // Recorrer todos los elementos
  elements.forEach((element, index) => {
    // Verificar si el texto incluye el valor de búsqueda
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      // Mostrar tarjeta coincidente
      cards[index].classList.remove("hide");
    } else {
      // Ocultar otros
      cards[index].classList.add("hide");
    }
  });
});

// Mostrar inicialmente todos los libros
window.onload = () => {
  filterBook("all");
};

// Mostrar el modal de prueba
function showQuiz(title, questions) {
  Swal.fire({
    title: "¿Ya has leido el libro (" + `${title}` + ") ?",
    confirmButtonColor: "#00ADB5",
    showDenyButton: true,
    confirmButtonText: "Sí",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¿Quieres realizar una test sobre el libro?",
        confirmButtonColor: "#00ADB5",
        showDenyButton: true,
        confirmButtonText: "Sí",
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById(
            "quiz-title"
          ).innerText = `Quiz sobre ${title}`;
          document.getElementById("question1").innerText = questions[0];
          document.getElementById("question2").innerText = questions[1];
          document.getElementById("question3").innerText = questions[2];

          let modal = document.getElementById("quizModal");
          let span = document.getElementsByClassName("close")[0];

          modal.style.display = "block";

          span.onclick = function () {
            modal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      });
    } else {
      //Redireccionar a el link del libro para leerlo
    }
  });
}
