const truthButton = document.getElementById("truth");
const dareButton = document.getElementById("dare");
const wouldYouRatherButton = document.getElementById("wouldYouRather");
const neverHaveIEverButton = document.getElementById("neverHaveIEver");
const paranoiaButton = document.getElementById("paranoia");
const resetButton = document.getElementById("reset");
const getTruthop = truthButton.addEventListener("click", getTruth);
const getDareop = dareButton.addEventListener("click", getDare);
const getwouldYouRatherop = wouldYouRatherButton.addEventListener(
  "click",
  getwouldYouRather
);
const neverHaveIEver = neverHaveIEverButton.addEventListener(
  "click",
  getneverHaveIEver
);
const paranoia = paranoiaButton.addEventListener("click", getparanoia);
const reset = resetButton.addEventListener("click", getreset);
let textArea = document.getElementById("text");

async function getTruth() {
  textArea.innerHTML = "updating truth.....";
  truthButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/v1/truth");
  const data = await apiUrl.json();
  truthButton.disable = false;
  textArea.innerHTML = data.question;
}

async function getDare() {
  textArea.innerHTML = "updating dare.....";
  dareButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/api/dare");
  const data = await apiUrl.json();
  dareButton.disable = false;
  textArea.innerHTML = data.question;
}

async function getwouldYouRather() {
  textArea.innerHTML = "updating.....";
  wouldYouRatherButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/api/wyr");
  const data = await apiUrl.json();
  wouldYouRatherButton.disable = false;
  textArea.innerHTML = data.question;
}

async function getneverHaveIEver() {
  textArea.innerHTML = "updating.....";
  neverHaveIEverButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/api/nhie");
  const data = await apiUrl.json();
  neverHaveIEverButton.disable = false;
  textArea.innerHTML = data.question;
}

async function getparanoia() {
  textArea.innerHTML = "updating.....";
  paranoiaButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/api/paranoia");
  const data = await apiUrl.json();
  paranoiaButton.disable = false;
  textArea.innerHTML = data.question;
}

function getreset() {
  textArea.innerHTML = "click to start";
}
