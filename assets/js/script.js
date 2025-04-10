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
          <img src="assets/images/background_images/ps_girl.webp" alt="PlayStation 5"</a>
          <a href="ps-games.html" id="ps-games-style">
          <img src="assets/images/background_images/ps5_games.webp" alt="PlayStation 5 Games"</a>
        </div>
      `;
      break;
    case "ns":
      wrapper.innerHTML = `
      <div class="ns-container">
        <a href="ns.html" id="ns-style">
        <img src="assets/images/background_images/ns_console.webp" alt="Nintendo Switch"</a>
        <a href="ns-games.html" id="ns-games-style">
        <img src="assets/images/background_images/ns_games.webp" alt="Nintendo Switch Games"</a>
      </div>
      `;
      break;
    case "xbox":
      wrapper.innerHTML = `
      <div class="xbox-container">
        <a href="xbox.html" id="xbox-style">
        <img src="assets/images/background_images/xbox_console.webp" alt="Xbox Series X"</a>
        <a href="xbox-games.html" id="xbox-games-style">
        <img src="assets/images/background_images/xbox_games.webp" alt="Xbox Series X Games"</a>
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

// JavaScript for ps-games.html

// This script dynamically loads game data and filters it based on the selected platform.

const games = [
  {
      title: "Final Fantasy VII",
      platform: "ps1",
      year: 1997,
      description: "A groundbreaking RPG with a compelling story.",
      image: "assets/images/ff7.jpg"
  },
  {
      title: "Metal Gear Solid",
      platform: "ps1",
      year: 1998,
      description: "A revolutionary stealth action game.",
      image: "assets/images/mgs.jpg"
  },
  {
      title: "Grand Theft Auto: San Andreas",
      platform: "ps2",
      year: 2004,
      description: "An open-world action-adventure classic.",
      image: "assets/images/gta-sa.jpg"
  },
  {
      title: "Shadow of the Colossus",
      platform: "ps2",
      year: 2005,
      description: "An atmospheric action-adventure game.",
      image: "assets/images/sotc.jpg"
  },
  {
      title: "The Last of Us",
      platform: "ps3",
      year: 2013,
      description: "A post-apocalyptic action-adventure masterpiece.",
      image: "assets/images/tlou.jpg"
  },
  {
      title: "Uncharted 2: Among Thieves",
      platform: "ps3",
      year: 2009,
      description: "An action-adventure game with cinematic storytelling.",
      image: "assets/images/uncharted2.jpg"
  },
  {
      title: "God of War (2018)",
      platform: "ps4",
      year: 2018,
      description: "A reimagined action-adventure with a powerful narrative.",
      image: "assets/images/gow.jpg"
  },
  {
      title: "Horizon Zero Dawn",
      platform: "ps4",
      year: 2017,
      description: "An open-world action RPG with unique gameplay.",
      image: "assets/images/horizon.jpg"
  },
  {
      title: "Ratchet & Clank: Rift Apart",
      platform: "ps5",
      year: 2021,
      description: "A visually stunning platformer with dimension-hopping gameplay.",
      image: "assets/images/ratchet.jpg"
  },
  {
      title: "Demon's Souls (2020)",
      platform: "ps5",
      year: 2020,
      description: "A challenging action RPG with immersive atmosphere.",
      image: "assets/images/demonsouls.jpg"
  }
];

function displayGames(filteredGames = games) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = ""; // Clear existing list

  filteredGames.forEach(game => {
      const gameItem = document.createElement("li");
      gameItem.classList.add("game-item");
      gameItem.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <div class="game-details">
              <h3>${game.title} (${game.year})</h3>
              <p>${game.description}</p>
              <button>View Details</button>
          </div>
      `;
      gameList.appendChild(gameItem);
  });
}

displayGames(); // Display all games initially

document.getElementById("filter-controls").addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-button")) {
      document.querySelectorAll(".filter-button").forEach(button => {
          button.classList.remove("active");
      });
      event.target.classList.add("active");

      const filter = event.target.dataset.filter;
      if (filter === "all") {
          displayGames();
      } else {
          const filteredGames = games.filter(game => game.platform === filter);
          displayGames(filteredGames);
      }
  }
});