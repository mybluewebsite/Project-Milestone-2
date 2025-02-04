// Switches between light and dark modes function

let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.getElementById("mode-button");
const wrapper = document.getElementById("wrapper");
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
 * Loads content dynamically into the wrapper div based on the selected page.
 * @param {string} page - The name of the page to load.
 */
function pageSelect(page) {
  switch (page) {
    case "home":
      window.location.reload();
      break;
    case "ps":
      wrapper.innerHTML = `
        <div class="ps-container">
          <a href="ps.html" id="ps-style">
          <img src="" alt="PlayStation 5"</a>
          <a href="ps-games.html" id="ps-games-style">
          <img src="" alt="PlayStation 5 Games"</a>
        </div>
      `;
      break;
    case "ns":
      wrapper.innerHTML = `
      <div class="ns-container">
        <a href="ns.html" id="ns-style">
        <img src="" alt="Nintendo Switch"</a>
        <a href="ns-games.html" id="ns-games-style">
        <img src="" alt="Nintendo Switch Games"</a>
      </div>
      `;
      break;
    case "xbox":
      wrapper.innerHTML = `
      <div class="xbox-container">
        <a href="xbox.html" id="xbox-style">
        <img src="" alt="Xbox Series X"</a>
        <a href="xbox-games.html" id="xbox-games-style">
        <img src="" alt="Xbox Series X Games"</a>
      </div>
      `;
      break;
    default:
      console.error(`Invalid page selected: ${page}`);
      wrapper.innerHTML = `
        <h1>Page Not Found</h1>
        <br>
        <p>The requested page could not be found.</p>
      `;
  }
}

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) => {
  const gif = document.createElement("img");
  gif.src = `assets/gifs/${index + 1}.gif`;
  gif.loop = true;
  gif.classList.add("gif-replacement");
  gif.style.display = "none";

  const existingContent = tile.innerHTML;
  const contentWrapper = document.createElement("div");

  contentWrapper.innerHTML = existingContent;
  tile.innerHTML = "";
  tile.appendChild(contentWrapper);
  tile.appendChild(gif);

  tile.addEventListener("mouseover", () => {
    gif.style.display = "block";
    contentWrapper.style.display = "none";
  });

  tile.addEventListener("mouseout", () => {
    gif.style.display = "none";
    contentWrapper.style.display = "block";
  });
});

// Remove default classes from Bootstrap

const element = document.querySelector(".bg-dark");
element.classList.remove("bg-dark");

/*// Takes user back to top of the screen

const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });*/
