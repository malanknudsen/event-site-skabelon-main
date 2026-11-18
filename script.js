// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

// Darkmode-Lightmode boks
const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");

function handleThemeChange(event) {
  const isLight = toggleSwitch.checked;
  html.classList.toggle("light", isLight);
  localStorage.setItem("isLightMode", isLight);
}

function getSavedTheme() {
  // 1. hent det gemte theme
  const isLight = localStorage.getItem("isLightMode") === "true";
  // 2. sync dark-klassen på html
  html.classList.toggle("Light", isLight);
  // 3. sync checkboxens checked-state
  toggleSwitch.checked = isLight;
}

getSavedTheme();

toggleSwitch?.addEventListener("change", handleThemeChange);
