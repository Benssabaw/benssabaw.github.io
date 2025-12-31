const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

const musicToggle = document.getElementById('musicToggle');
const audioElement = new Audio('Let The Light In.mp3'); // Replace with your music file
const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';
let isPlaying = false; // Add a variable to track the playing state

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    audioElement.pause();
    musicToggle.innerHTML = playIcon; // Change to play icon
    isPlaying = false; // Update the playing state
  } else {
    audioElement.play();
    musicToggle.innerHTML = pauseIcon; // Change to pause icon
    isPlaying = true; // Update the playing state
  }
});