
const panel = document.getElementById("panel");
const connection = document.getElementById("connection");
const connectButton = document.getElementById("connect");

function showPanel(title, description) {
  panel.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;
}

document.querySelectorAll(".app").forEach(button => {
  button.addEventListener("click", () => {
    const app = button.dataset.app;

    if (app === "games") {
      showPanel(
        "🎮 Games Library",
        "Your Android game library will appear here."
      );
    }

    if (app === "browser") {
      showPanel(
        "🌐 Browser",
        "Your cloud Android browser will be available here."
      );
    }

    if (app === "settings") {
      showPanel(
        "⚙️ Settings",
        "ANDROID X settings. Cloud connection: Not configured."
      );
    }

    if (app === "fighterz") {
      showPanel(
        "🐉 Dragon Ball Gaming",
        "The official FighterZ game does not have an Android release. We still need to investigate compatible ways to access the game."
      );
    }
  });
});

connectButton.addEventListener("click", () => {
  connection.textContent =
    "Cloud Android engine not configured yet.";

  showPanel(
    "Cloud Connection",
    "The launcher is working. Next we need to connect a real cloud Android machine."
  );
});

function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
}

updateClock();
setInterval(updateClock, 1000);
