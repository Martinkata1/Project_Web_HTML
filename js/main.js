const btn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

btn.onclick = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.background = "white";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "20px";
  nav.style.padding = "20px";
};
// sound toggle for video
const video = document.getElementById("heroVideo");
const soundBtn = document.getElementById("soundBtn");

soundBtn.onclick = () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "🔇" : "🔊";
};
