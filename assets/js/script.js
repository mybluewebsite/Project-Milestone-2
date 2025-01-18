// Detects dark-mode

let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.getElementById("mode-button");

const lightModeSvg = document.querySelector("#mode-button svg:first-child");
const darkModeSvg = document.querySelector("#mode-button svg:last-child");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  lightModeSvg.style.display = "none";
  darkModeSvg.style.display = "block";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  lightModeSvg.style.display = "block";
  darkModeSvg.style.display = "none";
};

if (darkmode === "active") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});









/*// Takes user back to top of the screen

const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });*/

/*const darkMode = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // If the user prefers dark mode, apply dark mode styles
    document.documentElement.classList.add("dark");
  } else {
    // If the user prefers light mode, apply light mode styles (or remove dark mode class)
    document.documentElement.classList.remove("dark");
  }
};

// Call the function to initiate
darkMode();

// Add an event listener to handle system preference changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", darkMode);*/

/* Video player to be used on mouseover */
/*const video = document.getElementById('myVideo');

document.addEventListener('mouseover', () => {
    video.play();
});

document.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0; // Reset video to the beginning
});*/

/* PlayStation 1 opening screen clip from YouTube */
/*<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/gdytHA0DZ1M?si=lPPQNXSNJjx3mZb1&amp;clip=UgkxTNUrRBYbSQqyk-SToTWCDjrcXG2Nhf3r&amp;clipt=EKoVGLI8"
  title="PlayStation 1 onpening screen"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>;*/
