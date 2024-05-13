//----------Index--------------

document.addEventListener("DOMContentLoaded", function () {
  var submenuToggle = document.querySelector(".submenu-toggle");
  var submenu = document.querySelector(".submenu");

  submenuToggle.addEventListener("click", function () {
    submenu.classList.toggle("active");
  });
});

function obtenerNumeroAzar() {
  return Math.floor(Math.random() * (8 - 0) + 0);
}

//Consejos
function establecerConsejo() {
  let consejos1 = [
    "Lee diariamente: Dedica un tiempo todos los días a la lectura, incluso si es solo por unos minutos. La práctica constante es clave para mejorar.",
    "Varía los géneros: Explora diferentes géneros literarios, desde ficción hasta no ficción, para ampliar tu exposición a diversos estilos y vocabulario.",
    "Utiliza un diccionario: Mantén un diccionario a mano mientras lees para buscar palabras desconocidas y comprender su significado.",
    "Contextualiza las palabras nuevas: Intenta comprender el significado de las palabras nuevas a través del contexto de la oración o el párrafo donde aparecen.",
    "Crea listas de vocabulario: Anota las palabras nuevas que encuentres durante la lectura y revísalas regularmente para reforzar tu memoria.",
    "Busca sinónimos: En lugar de repetir la misma palabra, busca sinónimos para enriquecer tu vocabulario y evitar la redundancia.",
    "Analiza la estructura: Observa cómo están construidas las frases y párrafos para comprender mejor la gramática y mejorar tu propia escritura.",
    "Participa en debates: Participar en debates te obliga a expresar tus ideas de manera clara y precisa, lo que puede ampliar tu vocabulario y mejorar tu habilidad para argumentar.",
    "Lee en voz alta: La lectura en voz alta puede ayudarte a identificar errores gramaticales y mejorar tu pronunciación, además de ayudarte a recordar nuevas palabras.",
  ];

  let consejos2 = [
    "Practica el vocabulario activo: Intenta usar las nuevas palabras en tus conversaciones y escritos para integrarlas en tu vocabulario activo.",
    "Haz resúmenes: Después de leer un texto, haz un resumen para procesar la información y recordar las palabras clave.",
    "Haz ejercicios de escritura creativa: Practica escribir historias cortas, poemas o ensayos para explorar nuevas palabras y estructuras gramaticales.",
    "Revise tu trabajo: Revisa tus escritos en busca de palabras repetitivas y busca alternativas más precisas o variadas.",
    "Sé paciente y constante: Mejorar tu vocabulario y habilidades de lectura y escritura lleva tiempo y práctica, así que sé paciente contigo mismo y mantén una actitud constante de aprendizaje.",
    "Usa aplicaciones de aprendizaje: Hay varias aplicaciones y herramientas en línea disponibles para mejorar tu vocabulario y habilidades lingüísticas, úsalas como recursos complementarios a tu estudio.",
    "Aprende raíces y prefijos: Comprender las raíces y prefijos comunes puede ayudarte a deducir el significado de palabras desconocidas y ampliar tu comprensión del vocabulario.",
    "Consume contenido variado: Lee libros, artículos, blogs y mira películas y series en diferentes idiomas y géneros para exponerte a una amplia gama de vocabulario y estilos de escritura.",
    "Consulta fuentes confiables: Al buscar definiciones o información sobre palabras, asegúrate de utilizar fuentes confiables y autorizadas para obtener información precisa y precisa.",
  ];

  let consejoIndex1 = obtenerNumeroAzar();
  let consejoIndex2 = obtenerNumeroAzar();
  let consejo1 = consejos1[consejoIndex1];
  let consejo2 = consejos2[consejoIndex2];

  // Extraer el título del consejo (desde el inicio hasta los dos puntos)
  let tituloConsejo1 = consejo1.substring(0, consejo1.indexOf(":") + 1);
  let tituloConsejo2 = consejo2.substring(0, consejo2.indexOf(":") + 1);

  // Extraer el cuerpo del consejo (después de los dos puntos)
  let cuerpoConsejo1 = consejo1.substring(consejo1.indexOf(":") + 1);
  let cuerpoConsejo2 = consejo2.substring(consejo2.indexOf(":") + 1);

  // Formatear el título en negrita y actualizar el contenido de los elementos HTML
  document.getElementById("consejo1").innerHTML =
    "<strong>" + tituloConsejo1 + "</strong>" + cuerpoConsejo1;
  document.getElementById("consejo2").innerHTML =
    "<strong>" + tituloConsejo2 + "</strong>" + cuerpoConsejo2;
}

establecerConsejo();

//Slider
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;

  // Arreglo de elementos de la galería
  const galleryItems = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/91XHDtSt7qL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      title: "El completo Sherlock Holmes",
      description:
        "Cuando Sir Arthur Conan Doyle presentó al mundo a Sherlock Holmes y al Dr. Watson en 1887 en Estudio en escarlata, nació un verdadero icono de la literatura. Desde entonces, su humilde dirección en el 221B de Baker Street se ha vuelto casi tan famosa como el gran detective en persona, y la increíble popularidad de las aventuras de Sherlock Holmes nunca ha flaqueado en los últimos 130 años.",
    },
    {
      imageUrl:
        "https://editorialverbum.es/wp-content/uploads/2019/05/El-viejo-y-el-mar.jpg",
      title: "El viejo y el mar",
      description:
        "El viejo y el mar (The Old Man and the Sea) es una novela corta escrita por Ernest Hemingway en 1951 en Cabo Blanco y publicada en 1952. Fue su último trabajo de ficción importante publicado en vida y posiblemente su obra más famosa.",
    },
    {
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/e6/8c/e68c2b03eeeaa8cb4493f8803d784642.jpg",
      title: "El conde de Montecristo",
      description:
        "El conde de Montecristo (en francés, Le comte de Montecristo) es una novela de aventuras clásica de Alejandro Dumas, con la colaboración de Auguste Maquet. Esta obra se suele considerar como el mejor trabajo de Dumas, y a menudo se incluye en las listas de las mejores novelas de todos los tiempos. El libro se terminó de escribir en 1844 y fue publicado en una serie de 18 entregas, como folletín, durante los dos años siguientes.",
    },
    {
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/f4/bc/f4bc25288107cfebe6a9cbc1e245c00a.jpg",
      title: "El Principito",
      description:
        "La trama sigue a un piloto varado en el desierto del Sahara que se encuentra con el Principito, un niño extraterrestre que viaja por diferentes planetas habitados por personajes simbólicos que representan aspectos de la naturaleza humana y los comportamientos absurdos de los adultos.",
    },
    {
      imageUrl:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/96/dd/96dd010942c52ea65ee2f0408c20df79.jpg",
      title: "Banderas Al Viento",
      description:
        "Capturado en Rosas por los franceses, tras un duro y encarnizado combate, Hornblower deberá enfrentarse a un juicio en París por haber enarbolado la tricolor en su último enfrentamiento con la Armada napoleónica. Horatio Hornblower tratará de evitar a toda costa una muerte que sería deshonrosa.",
    },
    {
      imageUrl:
        "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/65d74208-b85c-4895-9304-8f03805b0110/d_360_620/portada_fortunata-y-jacinta_benito-perez-galdos_201911261054.webp",
      title: "Fortunata y Jacinta",
      description:
        "La tormentosa relación amorosa entre los dos protagonistas, Juanito Santa Cruz y Fortunata, incapaces de superar las dificultades que su diferencia de estatus social les impone, se desarrolla en el ambiente castizo de finales del siglo xix, presentándose, además, un panorama completísimo de la vida y actividades de la clase media española.Asimismo, el libro retrata de forma magistral el papel de la mujer en la sociedad, con Fortunata y Jacinta como máximas exponentes, y la hipocresía dominante en una burguesía que intenta superar su anquilosamiento, impregnada de una religiosidad asfixiante y de unas costumbres firmemente arraigadas.",
    },
    {
      imageUrl:
        "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/8173cda0-d6ad-4ac9-848e-63526e671d8a/d_360_620/portada_la-corona-de-hierba_colleen-mccullough_202204080851.webp",
      title: "La corona de hierba",
      description:
        "La corona de hierba (en inglés, The Grass Crown) es una novela histórica de la escritora australiana Colleen McCullough. Es la segunda de la serie Masters of Rome. La novela se abre poco después de la acción de El primer hombre de Roma. Cayo Mario y Lucio Cornelio Sila cenan juntos con sus esposas, y discuten la amenaza que representan Mitrídates VI del Ponto y Tigranes II de Armenia.",
    },
  ];

  document.querySelector(".prev-button").addEventListener("click", () => {
    navigate(-1);
  });

  document.querySelector(".next-button").addEventListener("click", () => {
    navigate(1);
  });

  function navigate(direction) {
    const totalImages = galleryItems.length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;

    // Seleccionar el contenedor de la galería
    const galleryContainer = document.querySelector(".gallery-container");

    // Actualizar la imagen y la descripción en el contenedor de la galería
    galleryContainer.innerHTML = `
            <div class="gallery-item">
                <img src="${galleryItems[currentIndex].imageUrl}" alt="">
                <div class="descripcion">
                    <h1>${galleryItems[currentIndex].title}</h1>
                    <span>${galleryItems[currentIndex].description}</span>
                </div>
            </div>
        `;
  }

  // Llamar a la función navigate para mostrar la primera imagen al cargar la página
  navigate(0);
});