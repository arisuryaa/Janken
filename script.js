// pilAi

function pilAi() {
  const kom = Math.floor(Math.random() * 10);
  if (kom <= 3) return "kertas";
  if (kom > 3 && kom < 6) return "batu";
  return "gunting";
}

// aturan

function aturan(ai, user) {
  if (ai == user) return "Seri";
  if (user == "kertas") return ai == "batu" ? "Menang" : "Kalah";
  if (user == "batu") return ai == "gunting" ? "Menang" : "Kalah";
  if (user == "gunting") return ai == "kertas" ? "Menang" : "Kalah";
}

// score

const elemen = document.createElement("span");
let value = 0;
const wadah = document.querySelector(".score-ai");
elemen.textContent = value;
wadah.appendChild(elemen);

const elemen2 = document.createElement("span");
let value2 = 0;
const wadah2 = document.querySelector(".score-user");
elemen2.textContent = value2;
wadah2.appendChild(elemen2);

// pil user

const batu = document.querySelector(".batu");
const kertas = document.querySelector(".kertas");
const gunting = document.querySelector(".gunting");

batu.addEventListener("click", function () {
  const user = batu.className;
  const ai = pilAi();
  const input = aturan(ai, user);
  const seeHasil = document.querySelector(".hasil");
  seeHasil.innerHTML = input;
  seeHasil.classList.add("hasil1");
  const imgAi = document.querySelector("img.kom-batu");
  imgAi.setAttribute("src", `/img/${ai}.png`);

  if (input == "Kalah") {
    value += 1;
    elemen.textContent = value;
    if (value == 10) {
      let tampung = confirm("Kamu Kalah \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  } else if (input == "Menang") {
    value2 += 1;
    elemen2.textContent = value2;
    if (value2 == 10) {
      let tampung = confirm("Kamu Menang!!! \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  }
});

kertas.addEventListener("click", function () {
  const user = kertas.className;
  const ai = pilAi();
  const input = aturan(ai, user);
  const seeHasil = document.querySelector(".hasil");
  seeHasil.innerHTML = input;
  seeHasil.classList.add("hasil1");
  const imgAi = document.querySelector("img.kom-batu");
  imgAi.setAttribute("src", `/img/${ai}.png`);
  if (input == "Kalah") {
    value += 1;
    elemen.textContent = value;
    if (value == 10) {
      let tampung = confirm("Kamu Kalah \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  } else if (input == "Menang") {
    value2 += 1;
    elemen2.textContent = value2;
    if (value2 == 10) {
      let tampung = confirm("Kamu Menang!!! \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  }
});

gunting.addEventListener("click", function () {
  const user = gunting.className;
  const ai = pilAi();
  const input = aturan(ai, user);
  const seeHasil = document.querySelector(".hasil");
  seeHasil.innerHTML = input;
  seeHasil.classList.add("hasil1");
  const imgAi = document.querySelector("img.kom-batu");
  imgAi.setAttribute("src", `/img/${ai}.png`);
  if (input == "Kalah") {
    value += 1;
    elemen.textContent = value;
    if (value == 10) {
      let tampung = confirm("Kamu Kalah \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  } else if (input == "Menang") {
    value2 += 1;
    elemen2.textContent = value2;
    if (value2 == 10) {
      let tampung = confirm("Kamu Menang!!! \nIngin bermain lagi?");
      if (tampung) {
        window.location.reload();
      } else {
        window.location.href = "index.html";
      }
    }
  }
});

console.log(pilAi());
