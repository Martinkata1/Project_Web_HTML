// menu toggle
const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

menuBtn.addEventListener("click", e => {
  e.stopPropagation();
  menuPanel.classList.toggle("open");
});

document.addEventListener("click", e => {
  if (!menuPanel.contains(e.target)) {
    menuPanel.classList.remove("open");
  }
});
// sound toggle for video
const video = document.getElementById("heroVideo");
const soundBtn = document.getElementById("soundBtn");

soundBtn.onclick = () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "🔇" : "🔊";
};