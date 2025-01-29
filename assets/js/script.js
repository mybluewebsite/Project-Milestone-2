// Switches between light and dark modes function

let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.getElementById("mode-button");
const wrapper = document.getElementById('wrapper');
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


/**
 * This function handles the live loading of each 'page' of the website
 * It takes a parameter that is a string of the page name and dynamically
 * updates the wrapper div
 * @param {*} page 
 */
function pageSelect(page) {
    if (page==='home') {
        window.location.reload();
    }
    if (page==='ps1') {
        wrapper.innerHTML = `
        <h1>Play Station</h1>
        <p>Is a console...</p>
        `
    }
    if (page==='ps2') {
        wrapper.innerHTML = `
        <h1>Play Station 2</h1>
        <p>Is a console...</p>
        `
    }
    if (page==='xbox360') {
        wrapper.innerHTML = `
        <h1>Xbox 360</h1>
        <p>Is a console...</p>
        `
    }
};


/* Hover over function */
const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) => {
  const video = document.createElement("video");
  video.src = `assets/videos/${index + 1}.mp4`;
  video.loop = true;
  video.muted = true;
  video.preload = "auto";
  video.style.display = "none"; 
  video.classList.add("video-replacement");

  const existingContent = tile.innerHTML; 
  const contentWrapper = document.createElement("div");

  contentWrapper.innerHTML = existingContent;
  tile.innerHTML = "";
  tile.appendChild(contentWrapper);
  tile.appendChild(video);

  tile.addEventListener("mouseover", () => {
    video.style.display = "block"; 
    contentWrapper.style.display = "none";
    video.play();
  });

  tile.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
    video.style.display = "none"; 
    contentWrapper.style.display = "block";
  });
});

/* Remove default classes from Bootstrap */
const element = document.querySelector('.bg-dark');
element.classList.remove('bg-dark');




/* Custom navbar script */









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
