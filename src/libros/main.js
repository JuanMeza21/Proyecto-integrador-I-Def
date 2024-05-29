let books = [
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    genre: "Fiction",
    image:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/f4/bc/f4bc25288107cfebe6a9cbc1e245c00a.jpg",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: [
          "Julio Cortázar",
          "Antoine de Saint-Exupéry",
          "Gabriel García Márquez",
        ],
        correctAnswer: 1,
      },
      {
        question: "¿En qué planeta vivía el principito?",
        options: ["Tierra", "Venus", "B-612"],
        correctAnswer: 2,
      },
      {
        question: "¿Cuál es el tema principal del libro?",
        options: [
          "La amistad",
          "La soledad",
          "La infancia y la naturaleza humana",
        ],
        correctAnswer: 2,
      },
    ],
    readLink:
      "https://web.seducoahuila.gob.mx/biblioweb/upload/el%20principito.pdf",
  },
  {
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/b5/1a/b51a9baa4e59e89a3578cb224e1f1d81.jpg",
    questions: [
      {
        question: "¿Quién escribió el libro?",
        options: ["Yuval Noah Harari", "Steven Pinker", "Richard Dawkins"],
        correctAnswer: 0,
      },
      {
        question: "¿De qué trata principalmente el libro?",
        options: [
          "Historia de la humanidad",
          "Filosofía política",
          "Biología evolutiva",
        ],
        correctAnswer: 0,
      },
      {
        question: "¿Qué periodo histórico cubre el libro?",
        options: [
          "Edad Media",
          "Siglo XX",
          "Desde la prehistoria hasta el presente",
        ],
        correctAnswer: 2,
      },
    ],
    readLink:
      "https://www.pratec.org/wpress/pdfs-pratec/De-animales-a-dioses-Breve-historia-de-la-humanidad.pdf",
  },
  {
    title: "Breve historia del tiempo",
    author: "Stephen Hawking",
    genre: "Science",
    image:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/c1/d5/c1d562eb8d27c7af22c9f981f4de04f1.jpg",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: ["Albert Einstein", "Stephen Hawking", "Richard Feynman"],
        correctAnswer: 1,
      },
      {
        question: "¿Cuál es el tema principal del libro?",
        options: ["Astronomía", "Física cuántica", "Cosmología"],
        correctAnswer: 2,
      },
      {
        question: "¿Qué teoría científica se explica en el libro?",
        options: ["Teoría de la relatividad", "Big Bang", "Teoría de cuerdas"],
        correctAnswer: 1,
      },
    ],
    readLink:
      "http://www.librosmaravillosos.com/brevisimahistoriadeltiempo/pdf/Brevisima_historia_del_tiempo_-_S_Hawking&L_Mlodinow.pdf",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: "Biography",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/39/6b/396bd03f203c23193b40fca63959e12f.jpg",
    questions: [
      {
        question: "¿Quién escribió la biografía?",
        options: ["Bill Gates", "Tim Cook", "Walter Isaacson"],
        correctAnswer: 2,
      },
      {
        question: "¿De quién es la biografía?",
        options: ["Steve Wozniak", "Jeff Bezos", "Steve Jobs"],
        correctAnswer: 2,
      },
      {
        question:
          "¿Cuál fue una de las empresas más importantes que fundó Steve Jobs?",
        options: ["Microsoft", "Apple Inc.", "Amazon"],
        correctAnswer: 1,
      },
    ],
    readLink: "https://theoffice.pe/wp-content/uploads/Steve%20Jobs.pdf",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    image:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/cd/98/cd98b8ec87bf3636c6d3e9019d794bba.jpg",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
        correctAnswer: 0,
      },
      {
        question: "¿Cuál es el tema principal del libro?",
        options: ["Distopía", "Utopía", "Realismo mágico"],
        correctAnswer: 0,
      },
      {
        question: "¿En qué año fue publicado el libro?",
        options: ["1948", "1954", "1962"],
        correctAnswer: 0,
      },
    ],
    readLink: "https://www.philosophia.cl/biblioteca/orwell/1984.pdf",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/93/03/93031b82b34766029292983bf50afe65.jpg",
    questions: [
      {
        question: "¿Quién escribió el libro?",
        options: ["Michelle Obama", "Tara Westover", "Malala Yousafzai"],
        correctAnswer: 1,
      },
      {
        question: "¿De qué trata principalmente el libro?",
        options: ["Educación", "Política internacional", "Arte moderno"],
        correctAnswer: 0,
      },
      {
        question: "¿Cuál es el nombre del autor?",
        options: ["Tara Westover", "Megan Phelps-Roper", "Emma González"],
        correctAnswer: 0,
      },
    ],
    readLink: "https://online.fliphtml5.com/pezzr/xfza/#p=1",
  },
];

// Array de libros eliminado para la demostración

// Función para mostrar los libros al cargar la página
function displayBooks() {
  // Recorremos los libros y creamos las tarjetas para cada uno
  books.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card", book.genre, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", book.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("book-title");
    title.innerText = book.title;
    container.appendChild(title);

    let author = document.createElement("p");
    author.classList.add("book-author");
    author.innerText = "Autor: " + book.author;
    container.appendChild(author);

    card.appendChild(container);
    document.getElementById("books").appendChild(card);

    card.addEventListener("click", () => {
      showOptions(book.title, book.questions);
    });
  });
}

// Función para filtrar libros por género
function filterBook(value) {
  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// Función para mostrar opciones (Leer libro, Realizar test, Cancelar) con SweetAlert
function showOptions(title, questions) {
  Swal.fire({
    title: `¿Qué acción deseas realizar con el libro "${title}"?`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: "#00ADB5",
    confirmButtonText: "Realizar test",
    denyButtonText: "Leer libro",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("quiz-title").innerText = `Quiz sobre ${title}`;
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
      showQuiz(title, questions);
    } else if (result.isDenied) {
      let book = books.find((book) => book.title === title);
      if (book && book.readLink) {
        window.open(book.readLink, "_blank");
      }
    }
  });
}

// Función para mostrar el quiz modal
function showQuiz(title, questions) {
  document.getElementById("quiz-title").innerText = `Quiz sobre ${title}`;
  document.getElementById("question1").innerText = questions[0].question;
  document.getElementById("question2").innerText = questions[1].question;
  document.getElementById("question3").innerText = questions[2].question;

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

// Función para inicializar la página y mostrar todos los libros
window.onload = () => {
  displayBooks();
  filterBook("all"); // Mostrar todos los libros al inicio
};

// Función para buscar libros por título
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toUpperCase();
  let elements = document.querySelectorAll(".book-title");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    let title = element.innerText.trim().toUpperCase();
    if (title.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
