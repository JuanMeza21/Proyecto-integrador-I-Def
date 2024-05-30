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
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway"],
        correctAnswer: 0,
      },
      {
        question: "¿Cuál es el tema principal del libro?",
        options: ["Racismo", "Amor", "Guerra"],
        correctAnswer: 0,
      },
      {
        question: "¿En qué año fue publicado el libro?",
        options: ["1960", "1950", "1970"],
        correctAnswer: 0,
      },
    ],
    readLink: "https://www.raio.org/TKMFullText.pdf",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/63/0f/630f05cd4596ad44a1ecd0bb261f6327.jpg",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "John Steinbeck"],
        correctAnswer: 0,
      },
      {
        question: "¿Cuál es el nombre del protagonista?",
        options: ["Holden Caulfield", "Jay Gatsby", "George Milton"],
        correctAnswer: 0,
      },
      {
        question: "¿En qué ciudad se desarrolla la mayor parte de la historia?",
        options: ["Nueva York", "Los Ángeles", "Chicago"],
        correctAnswer: 0,
      },
    ],
    readLink:
      "https://simontechnology.org/ourpages/auto/2013/1/23/53406450/Catcher%20in%20the%20Rye%20Text.pdf",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s",
    questions: [
      {
        question: "¿Quién es el autor del libro?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger"],
        correctAnswer: 0,
      },
      {
        question: "¿Cuál es el nombre del protagonista?",
        options: ["Jay Gatsby", "Nick Carraway", "Tom Buchanan"],
        correctAnswer: 0,
      },
      {
        question: "¿En qué época está ambientada la historia?",
        options: ["Años 1920", "Años 1950", "Años 1980"],
        correctAnswer: 0,
      },
    ],
    readLink:
      "https://www.wsfcs.k12.nc.us/cms/lib/NC01001395/Centricity/Domain/7935/Gatsby_PDF_FullText.pdf",
  },
];

function displayBooks() {
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
      resetQuizModal();
      showQuiz(title, questions);
    } else if (result.isDenied) {
      let book = books.find((book) => book.title === title);
      if (book && book.readLink) {
        window.open(book.readLink, "_blank");
      }
    }
  });
}

function showQuiz(title, questions) {
  document.getElementById("quiz-title").innerText = `Quiz sobre ${title}`;

  let form = document.getElementById("quiz-form");
  form.innerHTML = "";

  questions.forEach((q, index) => {
    let questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    let question = document.createElement("p");
    question.innerText = q.question;
    questionContainer.appendChild(question);

    q.options.forEach((opt, optIndex) => {
      let label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="answer${index}" value="${optIndex}" required>
        ${opt}
      `;
      questionContainer.appendChild(label);
    });

    form.appendChild(questionContainer);
  });

  let submitButton = document.createElement("button");
  submitButton.classList.add("bg-[#00ADB5]", "text-white", "px-2", "py-1");
  submitButton.type = "button";
  submitButton.innerText = "Enviar";
  submitButton.onclick = function () {
    submitQuiz(questions);
  };
  form.appendChild(submitButton);

  let modal = document.getElementById("quizModal");
  modal.style.display = "block";
}

function submitQuiz(questions) {
  let correctAnswers = 0;
  let totalQuestions = questions.length;

  questions.forEach((q, index) => {
    let selectedOption = document.querySelector(
      `input[name="answer${index}"]:checked`
    );
    if (selectedOption) {
      let selectedAnswerIndex = parseInt(selectedOption.value);
      if (selectedAnswerIndex === q.correctAnswer) {
        correctAnswers++;
      }
    }
  });

  let message = `Obtuviste ${correctAnswers} de ${totalQuestions} respuestas correctas.`;

  Swal.fire({
    title: "Resultado del quiz",
    text: message,
    icon: "info",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#00ADB5",
  }).then(() => {
    document.getElementById("quizModal").style.display = "none";
  });
}

function resetQuizModal() {
  document.getElementById("quiz-title").innerText = "";
  document.getElementById("quiz-form").innerHTML = "";
  document.getElementById("quizModal").style.display = "none";
}

window.onclick = function (event) {
  let modal = document.getElementById("quizModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("quizModal").style.display = "none";
};

window.onload = () => {
  displayBooks();
  filterBook("all");
};

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
