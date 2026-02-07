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
// button for the video
const hero = document.querySelector(".hero");

hero.addEventListener("click", e => {
  // да не се тригърва при клик на меню/звук
  if (
    e.target.closest(".menu-btn") ||
    e.target.closest(".sound-btn") ||
    e.target.closest(".menu-panel")
  ) return;

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
