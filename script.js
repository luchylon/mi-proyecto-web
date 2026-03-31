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
  const resultado = document.getElementById("resultado");
  resultado.textContent =
    op === trivia.respuesta ? "¡Correcto!" : "Incorrecto, intenta otra vez.";

  // Quitar clase visible por si ya estaba
  resultado.classList.remove("visible");

  // Forzar re-render para reiniciar la animación
  void resultado.offsetWidth;

  // Agregar clase visible para el fade-in
  resultado.classList.add("visible");

  // Animación automática para mostrar el resultado
  resultado.scrollIntoView({ behavior: "smooth" });
};
  li.appendChild(btn);
  opcionesUl.appendChild(li);
});

