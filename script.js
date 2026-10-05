/* =========================================================
   💗 EASY CUSTOMIZATION — CHANGE THESE FIRST
   ========================================================= */
const LOVE = {
  herName: "My Bubbu",          // Her main name / nickname
  yourName: "Your Bhondu",      // Your name / nickname

  // Change these if you want different names anywhere else:
  extraNames: [
    // "Baby",
    // "Boobies",
    // "Sweetuuu",
    // "Cuttuu"
  ]
};

/* =========================================================
   You normally don't need to edit below this line.
   ========================================================= */

document.querySelectorAll("[data-girl]").forEach(el => el.textContent = LOVE.herName);
document.querySelectorAll("[data-my-name]").forEach(el => el.textContent = LOVE.yourName);
document.title = `For ${LOVE.herName} ❤️`;

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const hearts = document.getElementById("hearts");
const heartChars = ["♥", "♡", "❤", "✦", "✧", "❀"];

function createHeart() {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (10 + Math.random() * 22) + "px";
  h.style.color = `hsl(${330 + Math.random()*25}, ${65 + Math.random()*25}%, ${65 + Math.random()*15}%)`;
  h.style.animationDuration = (7 + Math.random() * 8) + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 16000);
}
setInterval(createHeart, 700);
for (let i = 0; i < 12; i++) setTimeout(createHeart, i * 180);

function burst() {
  for (let i = 0; i < 35; i++) {
    const h = document.createElement("div");
    h.className = "floating-heart";
    h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    h.style.left = "50vw";
    h.style.bottom = "35vh";
    h.style.fontSize = (12 + Math.random() * 25) + "px";
    h.style.animationDuration = (2 + Math.random() * 2) + "s";
    h.style.transform = `translateX(${(Math.random()-.5)*500}px)`;
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }
}

function sayYes() {
  document.getElementById("button-message").textContent =
    "I KNEW MY GIRL HAD A LITTLE SOFT SPOT FOR ME 😭❤️";
  burst();
  setTimeout(() => scrollToSection("final"), 900);
}

let moved = 0;
function moveMaybe() {
  const btn = document.getElementById("maybeBtn");
  const area = document.querySelector(".button-area");
  moved++;
  if (moved < 5) {
    const x = (Math.random() - .5) * 180;
    const y = (Math.random() - .5) * 70;
    btn.style.transform = `translate(${x}px,${y}px)`;
    document.getElementById("button-message").textContent =
      ["Nice try 😭", "You can't escape the apology!", "Come onnn 🥺", "I'll wait... ❤️"][moved-1];
  } else {
    btn.textContent = "okay okay 😭";
    btn.style.transform = "none";
    btn.onclick = sayYes;
    document.getElementById("button-message").textContent = "That's better. Come here 🫂";
  }
}

function openEnvelope() {
  const letter = document.getElementById("finalLetter");
  letter.classList.toggle("open");
  if (letter.classList.contains("open")) {
    burst();
    document.querySelector(".tap-text").textContent = "♡ opened with love ♡";
  }
}
