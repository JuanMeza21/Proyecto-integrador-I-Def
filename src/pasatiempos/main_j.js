const wordList = [
  {
    word: "efimero",
    hint: "Que dura poco tiempo.",
  },
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
  {
    word: "lobrego",
    hint: "Tenebroso, oscuro o sombrío.",
  },
  {
    word: "ebano",
    hint: "Madera muy dura y negra.",
  },
  {
    word: "esotérico",
    hint: "Que es conocido solo por iniciados en una doctrina o disciplina.",
  },
  {
    word: "indigo",
    hint: "Color azul oscuro.",
  },
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
  {
    word: "gargola",
    hint: "Estatua de figura grotesca y espantosa.",
  },
  {
    word: "gaznapiro",
    hint: "Especie de ave, semejante al gorrión, pero más pequeña.",
  },
  {
    word: "petreo",
    hint: "Que tiene la dureza o aspecto de la piedra.",
  },
  {
    word: "crepusculo",
    hint: "Claridad que hay desde que se pone el sol hasta que se hace de noche.",
  },
  {
    word: "fervido",
    hint: "Dicho de un líquido: Que hierve o está a punto de hervir.",
  },
  {
    word: "lúgubre",
    hint: "Triste, melancólico, siniestro o sombrío.",
  },
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
  {
    word: "brumoso",
    hint: "Que está cubierto por una niebla o bruma.",
  },
  {
    word: "clandestino",
    hint: "Que se hace en secreto o de manera oculta, especialmente si es contrario a la ley o a la autoridad establecida.",
  },
  {
    word: "caótico",
    hint: "Que carece de orden o está en completo desorden.",
  },
  {
    word: "disidente",
    hint: "Que se separa de la doctrina o enseñanza de una religión, de una ideología política, etc., o que se aparta de la opinión generalmente aceptada.",
  },
];

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  // Ressetting game variables and UI elements
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  gameModal.classList.remove("show");
};

const getRandomWord = () => {
  // Selecting a random word and hint from the wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word; // Making currentWord as random word
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  // After game complete.. showing modal with relevant details
  const modalText = isVictory
    ? `Encontraste la palabra correcta:`
    : "La palabra correcta era:";
  gameModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  gameModal.querySelector("h4").innerText = isVictory
    ? "Felicitaciones!"
    : "Game Over!";
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

const initGame = (button, clickedLetter) => {
  // Checking if clickedLetter is exist on the currentWord
  if (currentWord.includes(clickedLetter)) {
    // Showing all correct letters on the word display
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true; // Disabling the clicked button so user can't click again
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  // Calling gameOver function if any of these condition meets
  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);