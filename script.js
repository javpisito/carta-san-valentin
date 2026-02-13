const btnSorpresa = document.getElementById("btn-sorpresa");
const btnCorazones = document.getElementById("btn-corazones");

btnSorpresa.addEventListener("click", () => {
  const card = document.querySelector(".card");
  card.classList.remove("pop");
  void card.offsetWidth; // reset animación
  card.classList.add("pop");

  alert("Eres lo mejor que me ha pasado ❤️");
});

btnCorazones.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) crearCorazon();
});

function crearCorazon() {
  const c = document.createElement("div");
  c.className = "corazon";
  c.textContent = "💖";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = (2 + Math.random() * 2) + "s";
  document.body.appendChild(c);

  setTimeout(() => c.remove(), 4000);
}

// Animación al hacer clic en las fotos
document.querySelectorAll(".foto").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.remove("pop");
    void img.offsetWidth;
    img.classList.add("pop");
  });
});
