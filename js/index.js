let list = [
  "./musics/RASULULLOH KELADUR.mp3",
  "./musics/Amantu billahi.mp3",
  "./musics/Liyakun - Nashed.mp3",
  "./musics/Raqata ayna ya shavqo - Maher Zain.mp3",
  "./musics/Amantu billahi - Izzat Shukurov.mp3"
]
let imgs = [
  "./image/disc.png",
  "./image/music-note.png",
  "./image/itunes.png",
  "./image/music.png",
];

let currentAudioIndex = 0;
let currentImageIndex = 0;
let text = document.querySelector(".text");
let audio = new Audio(list[currentAudioIndex]);
const logo = document.querySelector(".logo");
let img = document.querySelector("#rotateImg");

function playSound() {
  audio.play();
  document.querySelector("#play").style.display = "none";
  document.querySelector("#pause").style.display = "block";
  getName();
  logo.classList.add("animated");
}
function getName() {
  let soundName = list[currentAudioIndex];
  let splittedName = soundName.split("/");
  text.textContent = splittedName[splittedName.length - 1];
}

function pauseSound() {
  audio.pause();
  document.querySelector("#play").style.display = "block";
  document.querySelector("#pause").style.display = "none";
  getName();
  logo.classList.remove("animated");
}

function nextSound() {
  logo.classList.add("animated");
  document.querySelector("#play").style.display = "none";
  document.querySelector("#pause").style.display = "block";
  currentAudioIndex++;
  if (list[currentAudioIndex] !== undefined) {
    audio.pause();
    audio = new Audio(list[currentAudioIndex]);
    audio.play();
    getName();
    currentImageIndex++;
    if (currentImageIndex === 1) {
      img.src = imgs[1];
    } else if (currentImageIndex === 2) {
      img.src = imgs[2];
    } else if (currentImageIndex === 3) {
      img.src = imgs[3];
    } else if (currentImageIndex <= 4) {
      currentImageIndex = 0;
      img.src = imgs[0];
    }
  }
}

function prevSound() {
  logo.classList.add("animated");
  document.querySelector("#play").style.display = "none";
  document.querySelector("#pause").style.display = "block";
  currentAudioIndex--;
  if (list[currentAudioIndex] !== undefined) {
    audio.pause();
    audio = new Audio(list[currentAudioIndex]);
    audio.play();
    getName();
    currentImageIndex--;
    if (currentImageIndex === 1) {
      img.src = imgs[1];
    } else if (currentImageIndex === 2) {
      img.src = imgs[2];
    } else if (currentImageIndex === 3) {
      img.src = imgs[3];
    } else if (currentImageIndex <= 4) {
      currentImageIndex = 0;
      img.src = imgs[0];
    }
  }
}
