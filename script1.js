document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  if (loading) loading.hidden = true;

  function showSection(id) {
    const target = document.getElementById(id);
    if (!target || !target.classList.contains("section")) {
      console.error(`Cannot navigate to missing section: ${id}`);
      return;
    }

    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    target.classList.add("active");
  }

  function resetCake() {
    const cake = document.getElementById("cake");
    const cakeContainer = cake.querySelector(".cake-container");
    const message = document.getElementById("cakeMessage");

    cake.classList.remove("blown");
    cakeContainer.classList.remove("cut");
    message.textContent = "";
  }

  document.querySelectorAll(".next-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      if (target) showSection(target);
    });
  });

  document.getElementById("openSurprise").addEventListener("click", () => {
    showSection("cake");
  });

  document.getElementById("blowCandles").addEventListener("click", () => {
    document.getElementById("cake").classList.add("blown");
    document.getElementById("cakeMessage").textContent =
      "Your wish is on its way! ❤️✨";
  });

  document.getElementById("cutCake").addEventListener("click", () => {
    const cake = document.getElementById("cake");
    const message = document.getElementById("cakeMessage");
    if (!cake.classList.contains("blown")) {
      message.textContent = "First, blow out the candles! 🕯️❤️";
      return;
    }

    cake.querySelector(".cake-container").classList.add("cut");
    message.textContent = "Happy Birthday! Let's celebrate together! 🍰💕";
  });

  document.getElementById("feedCake").addEventListener("click", () => {
    document.getElementById("cakeMessage").textContent =
      "A sweet birthday bite for you! 😘";
  });

  document.getElementById("resetCake").addEventListener("click", resetCake);

  document.getElementById("uploadPhoto").addEventListener("change", (event) => {
    const input = event.currentTarget;
    const file = input.files && input.files[0];
    if (!file) return;

    const photo = document.createElement("div");
    photo.className = "photo";

    const image = document.createElement("img");
    image.src = URL.createObjectURL(file);
    image.alt = "Uploaded memory";
    photo.appendChild(image);
    document.querySelector(".gallery").appendChild(photo);
    input.value = "";
  });

  document.getElementById("openLetter").addEventListener("click", () => {
    document.getElementById("letterContent").classList.remove("hidden");
  });

  document.getElementById("sendHug").addEventListener("click", () => {
    alert("Sending virtual hug ❤️🤗");
  });

  document.getElementById("lastSurprise").addEventListener("click", () => {
    alert("Final romantic message: You are my forever love 💋");
  });

  document.getElementById("replay").addEventListener("click", () => {
    resetCake();
    document.getElementById("letterContent").classList.add("hidden");
    showSection("welcome");
  });
});
