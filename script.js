const btnSorpresa = document.getElementById("btn-sorpresa");
const btnCorazones = document.getElementById("btn-corazones");

btnSorpresa.addEventListener("click", () => {
  const card = document.querySelector(".card");
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
  alert("Eres lo mejor que me pudo pasar, siempre me siento tan afortunado de tenerte cerca.");
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

// Mapa de textos fijos por imagen (edítalos a tu gusto)
const textos = {
  n1: "Una de las mejores fotos de nosotros, me encanta y wow, tambien es de los mejores momentos.",
  n2: "Un dia aunque dificil creo que nos ayudo mucho.",
  n3: "Me encanta verte feliz y tu carita hermosa me pone demasiado feliz. <3",
  n4: "Tamos locos verda???",
  n5: "Todo lo superaremos, creeme amol."
};

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTexto = document.getElementById("lightbox-texto");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".foto").forEach(img => {
  img.addEventListener("click", () => {
    const id = img.dataset.id; // n1, n2, ...
    lightboxImg.src = img.src;
    lightboxTexto.textContent = textos[id] || "";
    lightbox.classList.remove("oculto");
  });
});

cerrar.addEventListener("click", () => {
  lightbox.classList.add("oculto");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.add("oculto");
});

// Abrir lightbox desde botones tipo carta
document.querySelectorAll(".btn-carta").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id; // n1..n5
    const ruta = `img/${id}.jpeg`; // ajusta si usas .jpg

    lightboxImg.src = ruta;
    lightboxTexto.textContent = textos[id] || "";
    lightbox.classList.remove("oculto");
  });
});
// ⏳ Contador de días juntos (CONFIGURA TU FECHA AQUÍ)
const FECHA_INICIO = new Date("2025-11-18"); // YYYY-MM-DD
const contador = document.getElementById("contador-dias");

function actualizarContador() {
  const hoy = new Date();
  const diff = hoy - FECHA_INICIO;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  contador.textContent = `Llevamos ${dias} días juntos ⏳`;
}
actualizarContador();

// 🌙 Modo noche (persistente)
const toggleNoche = document.getElementById("toggle-noche");
const modoGuardado = localStorage.getItem("modo-noche") === "true";

if (modoGuardado) {
  document.body.classList.add("noche");
  toggleNoche.checked = true;
}

toggleNoche.addEventListener("change", () => {
  document.body.classList.toggle("noche", toggleNoche.checked);
  localStorage.setItem("modo-noche", toggleNoche.checked);
});

// 🔔 Sonido al abrir carta
const audioCarta = document.getElementById("sonido-carta");

// Llama esto cuando abras el lightbox (desde botones tipo carta)
function reproducirSonidoCarta() {
  if (!audioCarta) return;
  audioCarta.currentTime = 0;
  audioCarta.volume = 0.25; // sutil
  audioCarta.play().catch(() => {}); // evita errores por políticas del navegador
}