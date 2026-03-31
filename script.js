document.addEventListener("DOMContentLoaded", () => {
  console.log("Web lista y funcionando!");
});
const trivias = [
  {
    pregunta: "¿Qué número falta en la secuencia: 2, 4, 6, ?",
    opciones: ["7", "8", "9"],
    respuesta: "8"
  },
  {
    pregunta: "¿Cuál es la capital de Japón?",
    opciones: ["Seúl", "Tokio", "Beijing"],
    respuesta: "Tokio"
  }
];

// Selección diaria según la fecha
const hoy = new Date().getDate();
const trivia = trivias[hoy % trivias.length];

document.getElementById("pregunta").textContent = trivia.pregunta;

const opcionesUl = document.getElementById("opciones");
trivia.opciones.forEach(op => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = op;
  btn.onclick = () => {
    document.getElementById("resultado").textContent =
      op === trivia.respuesta ? "¡Correcto!" : "Incorrecto, intenta otra vez.";
  };
  li.appendChild(btn);
  opcionesUl.appendChild(li);
});