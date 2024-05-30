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
    word: "bonhomia",
    hint: "Afabilidad, sencillez, bondad y honradez en el carácter.",
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

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `images/hangman-0.svg`;
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
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = randomWord.word;
  document.querySelector(".hint-text b").innerText = randomWord.hint;
  resetGame();
};

const gameOver = (isVictory) => {
  gameModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  gameModal.querySelector("h4").innerText = isVictory
    ? "Felicitaciones!"
    : "Game Over!";
  gameModal.querySelector("p").innerHTML = `${
    isVictory ? "Encontraste la palabra correcta:" : "La palabra correcta era:"
  } <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

const handleLetterClick = (button, letter) => {
  if (currentWord.includes(letter)) {
    currentWord.split("").forEach((char, index) => {
      if (char === letter) {
        correctLetters.push(char);
        wordDisplay.querySelectorAll("li")[index].innerText = char;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

const createKeyboard = () => {
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", () => handleLetterClick(button, letter));
    keyboardDiv.appendChild(button);
  }
};

createKeyboard();
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);