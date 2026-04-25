// ===== MESSAGE SYSTEM (tetap kamu) =====
function sendMessage() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  let chat = document.getElementById("chat");

  if (name === "" || message === "") {
    alert("please fill all fields.");
    return;
  }

  let time = new Date();
  let hours = time.getHours().toString().padStart(2, '0');
  let minutes = time.getMinutes().toString().padStart(2, '0');

  let bubble = document.createElement("div");
  bubble.classList.add("bubble");

  bubble.innerHTML = `
    <div class="bubble-name">${name}</div>
    <div>${message}</div>
    <div class="time">${hours}:${minutes}</div>
  `;

  chat.appendChild(bubble);

  document.getElementById("message").value = "";
}

// ===== SCROLL REVEAL ANIMATION =====
const elements = document.querySelectorAll("h2, p, ul, li, input, textarea");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => observer.observe(el));


// ===== TYPEWRITER EFFECT FOR TITLE =====
const title = document.querySelector("h1");
const text = title.innerText;
title.innerText = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    title.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}

window.addEventListener("load", typeWriter);

// ===== PAGE TRANSITION OUT =====
document.addEventListener("click", function (e) {
  const link = e.target.closest("a");

  if (link && link.href) {
    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = link.href;
    }, 500);
  }
});