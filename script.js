const svgPlaceholder = document.querySelector(".svg-placeholder");

if (svgPlaceholder) {
  const balsal = document.querySelector("#balsal");
  const bar = document.querySelector("#bar");
  const have = document.querySelector("#have");

  const infoBalsal = document.querySelector("#info-balsal");
  const infoBar = document.querySelector("#info-bar");
  const infoHave = document.querySelector("#info-have");

  balsal.addEventListener("click", openBalsal);
  bar.addEventListener("click", openBar);
  have.addEventListener("click", openHave);

  function openBalsal() {
    infoBalsal.open = true;
  }
  function openBar() {
    infoBar.open = true;
  }
  function openHave() {
    infoHave.open = true;
  }

  infoBalsal.addEventListener("toggle", markBalsal);
  infoBar.addEventListener("toggle", markBar);
  infoHave.addEventListener("toggle", markHave);

  function markBalsal() {
    if (infoBalsal.open === true) {
      balsal.classList.add("er-aktiv");
    } else {
      balsal.classList.remove("er-aktiv");
    }
  }
  function markBar() {
    if (infoBar.open === true) {
      bar.classList.add("er-aktiv");
    } else {
      bar.classList.remove("er-aktiv");
    }
  }
  function markHave() {
    if (infoHave.open === true) {
      have.classList.add("er-aktiv");
    } else {
      have.classList.remove("er-aktiv");
    }
  }
}

const form = document.querySelector("form");

if (form) {
  form.addEventListener("invalid", cancelPopup, true);

  function cancelPopup(event) {
    event.preventDefault();
    form.querySelector(":user-invalid").focus();
  }
}

const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);

  const navn = params.get("navn");
  const maske = params.get("maske");
  const hof = params.get("hof");
  const oplevelser = params.getAll("oplevelse");

  const navnPlads = document.querySelector("#gaest-navn");
  const maskePlads = document.querySelector("#gaest-maske");
  const hofPlads = document.querySelector("#gaest-hof");
  const maskeBillede = document.querySelector("#maske-billede");
  const oplevelsesListe = document.querySelector("#gaest-oplevelser");

  if (navn) {
    navnPlads.textContent = "Kære " + navn;
  } else {
    navnPlads.textContent = "Kære gæst";
  }

  if (maske === "Volto") {
    maskePlads.textContent = "Volto";
    maskeBillede.src = "./img/maske-volto.svg";
  } else if (maske === "Bauta") {
    maskePlads.textContent = "Bauta";
    maskeBillede.src = "./img/maske-bauta.svg";
  } else {
    maskePlads.textContent = "Colombina";
    maskeBillede.src = "./img/maske-colombina.svg";
  }

  if (hof === "Guld") {
    hofPlads.textContent = "Guldhoffet";
    opsamlingPlaceholder.classList.add("hof-guld");
  } else if (hof === "Nat") {
    hofPlads.textContent = "Nathoffet";
    opsamlingPlaceholder.classList.add("hof-nat");
  } else {
    hofPlads.textContent = "Rubinhoffet";
    opsamlingPlaceholder.classList.add("hof-rubin");
  }

  if (oplevelser.length > 0) {
    for (const oplevelse of oplevelser) {
      const punkt = document.createElement("li");
      punkt.textContent = oplevelse;
      oplevelsesListe.append(punkt);
    }
  } else {
    const punkt = document.createElement("li");
    punkt.textContent =
      "Du har ikke valgt noget endnu. Lad aftenen overraske dig.";
    oplevelsesListe.append(punkt);
  }
}
