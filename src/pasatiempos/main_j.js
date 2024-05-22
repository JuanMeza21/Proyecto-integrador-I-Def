// Lista de palabras con sus respectivas pistas
const wordList = [
  { word: "efimero", hint: "Que dura poco tiempo." },
  {
    word: "quimera",
    hint: "Proyecto, deseo o ilusión, irrealizable o difícil de realizar.",
  },
  {
    word: "paradoja",
    hint: "Hecho o circunstancia extraña, contradictoria o sorprendente.",
  },
  {
    word: "efervescencia",
    hint: "Agitación o inquietud excesiva en el ánimo de alguien.",
  },
  {
    word: "quirofano",
    hint: "Sala de un hospital destinada a las operaciones quirúrgicas.",
  },
  { word: "lobrego", hint: "Tenebroso, oscuro o sombrío." },
  { word: "ebano", hint: "Madera muy dura y negra." },
  {
    word: "esotérico",
    hint: "Que es conocido solo por iniciados en una doctrina o disciplina.",
  },
  { word: "indigo", hint: "Color azul oscuro." },
  {
    word: "efluvio",
    hint: "Emisión o desprendimiento de algo, especialmente de un líquido.",
  },
  {
    word: "sibilino",
    hint: "Dicho de una persona o de un discurso: Que habla con doble sentido o con intención oculta.",
  },
  {
    word: "furtivo",
    hint: "Que se hace a escondidas o sin ser visto, generalmente con el propósito de ocultar algo.",
  },
  {
    word: "arcano",
    hint: "Que es difícil de entender o conocer, por lo que se oculta o se mantiene en secreto.",
  },
  { word: "gargola", hint: "Estatua de figura grotesca y espantosa." },
  {
    word: "gaznapiro",
    hint: "Especie de ave, semejante al gorrión, pero más pequeña.",
  },
  { word: "petreo", hint: "Que tiene la dureza o aspecto de la piedra." },
  {
    word: "crepusculo",
    hint: "Claridad que hay desde que se pone el sol hasta que se hace de noche.",
  },
  {
    word: "fervido",
    hint: "Dicho de un líquido: Que hierve o está a punto de hervir.",
  },
  { word: "lúgubre", hint: "Triste, melancólico, siniestro o sombrío." },
  {
    word: "perfido",
    hint: "Traicionero, desleal o que falta a la fe que debe guardar o al compromiso que ha contraído.",
  },
  {
    word: "quimérico",
    hint: "Que solo existe en la imaginación o en la fantasía, y no en la realidad.",
  },
  {
    word: "sequito",
    hint: "Conjunto de personas que acompañan y sirven a alguien, especialmente si es un personaje importante o un rey.",
  },
  {
    word: "espectro",
    hint: "Imagen que se forma en la mente, especialmente cuando se está imaginando cosas que producen miedo o inquietud.",
  },
  { word: "brumoso", hint: "Que está cubierto por una niebla o bruma." },
  {
    word: "clandestino",
    hint: "Que se hace en secreto o de manera oculta, especialmente si es contrario a la ley o a la autoridad establecida.",
  },
  { word: "caótico", hint: "Que carece de orden o está en completo desorden." },
  {
    word: "disidente",
    hint: "Que se separa de la doctrina o enseñanza de una religión, de una ideología política, etc., o que se aparta de la opinión generalmente aceptada.",
  },
];

// Seleccionando elementos del DOM
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Inicializando variables del juego
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Función para reiniciar el juego
const resetGame = () => {
  correctLetters = []; // Letras correctas
  wrongGuessCount = 0; // Contador de fallos
  hangmanImage.src = "images/hangman-0.svg"; // Imagen inicial del ahorcado
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Actualizar texto de adivinanzas
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join(""); // Mostrar espacios para las letras de la palabra
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false)); // Habilitar botones del teclado
  gameModal.classList.remove("show"); // Ocultar modal del juego
};

// Función para obtener una palabra aleatoria
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]; // Seleccionar palabra y pista aleatoria
  currentWord = word; // Asignar palabra actual
  document.querySelector(".hint-text b").innerText = hint; // Mostrar pista
  resetGame(); // Reiniciar juego
};

// Función para manejar el final del juego
const gameOver = (isVictory) => {
  const modalText = isVictory
    ? `Encontraste la palabra correcta:`
    : "La palabra correcta era:"; // Mensaje según resultado
  gameModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`; // Imagen según resultado
  gameModal.querySelector("h4").innerText = isVictory
    ? "Felicitaciones!"
    : "Game Over!"; // Título según resultado
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`; // Mostrar palabra correcta
  gameModal.classList.add("show"); // Mostrar modal del juego
};

// Función para inicializar el juego al hacer clic en una letra
const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    // Si la letra está en la palabra
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter); // Agregar letra correcta
        wordDisplay.querySelectorAll("li")[index].innerText = letter; // Mostrar letra en la palabra
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); // Marcar letra como adivinada
      }
    });
  } else {
    // Si la letra no está en la palabra
    wrongGuessCount++; // Incrementar contador de fallos
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`; // Actualizar imagen del ahorcado
  }
  button.disabled = true; // Deshabilitar botón de la letra
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Actualizar texto de adivinanzas

  // Verificar si el juego ha terminado
  if (wrongGuessCount === maxGuesses) return gameOver(false); // Si se alcanzó el máximo de fallos, el juego se pierde
  if (correctLetters.length === currentWord.length) return gameOver(true); // Si se adivinaron todas las letras, el juego se gana
};

// Crear botones del teclado y agregarles eventos de clic
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i); // Convertir código ASCII a letra
  keyboardDiv.appendChild(button); // Agregar botón al div del teclado
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  ); // Agregar evento de clic al botón
}

getRandomWord(); // Iniciar el juego con una palabra aleatoria
playAgainBtn.addEventListener("click", getRandomWord); // Agregar evento de clic al botón de jugar de nuevo
