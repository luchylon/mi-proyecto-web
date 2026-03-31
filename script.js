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

