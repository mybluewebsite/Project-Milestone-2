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

// JavaScript to dynamically load game data and filter it based on the selected platform.

const psgames = [
  {
    title: "Final Fantasy VII",
    platform: "Playstation 1",
    year: 1997,
    description: "A groundbreaking RPG with a compelling story.",
    image: "assets/images/#",
    rating: 92,
  },
  {
    title: "Metal Gear Solid",
    platform: "Playstation 1",
    year: 1998,
    description: "A revolutionary stealth action game.",
    image: "assets/images/#",
    rating: 94,
  },
  {
    title: "Grand Theft Auto: San Andreas",
    platform: "Playstation 2",
    year: 2004,
    description: "An open-world action-adventure classic.",
    image: "assets/images/#",
    rating: 93,
  },
  {
    title: "Shadow of the Colossus",
    platform: "Playstation 2",
    year: 2005,
    description: "An atmospheric action-adventure game.",
    image: "assets/images/#",
    rating: 91,
  },
  {
    title: "The Last of Us",
    platform: "Playstation 3",
    year: 2013,
    description: "A post-apocalyptic action-adventure masterpiece.",
    image: "assets/images/#",
    rating: 95,
  },
  {
    title: "Uncharted 2: Among Thieves",
    platform: "Playstation 3",
    year: 2009,
    description: "An action-adventure game with cinematic storytelling.",
    image: "assets/images/#",
    rating: 96,
  },
  {
    title: "God of War",
    platform: "Playstation 4",
    year: 2018,
    description: "A reimagined action-adventure with a powerful narrative.",
    image: "assets/images/#",
    rating: 94,
  },
  {
    title: "Horizon Zero Dawn",
    platform: "Playstation 4",
    year: 2017,
    description: "An open-world action RPG with unique gameplay.",
    image: "assets/images/#",
    rating: 89,
  },
  {
    title: "Ratchet & Clank: Rift Apart",
    platform: "Playstation 5",
    year: 2021,
    description:
      "A visually stunning platformer with dimension-hopping gameplay.",
    image: "assets/images/#",
    rating: 90,
  },
  {
    title: "Demon's Souls",
    platform: "Playstation 5",
    year: 2020,
    description: "A challenging action RPG with immersive atmosphere.",
    image: "assets/images/#",
    rating: 92,
  },
];

const xboxgames = [
  {
    title: "Halo: Combat Evolved",
    platform: "Xbox",
    year: 2001,
    description:
      "A revolutionary first-person shooter that defined a generation.",
    image: "assets/images/#",
    rating: 92,
  },
  {
    title: "Fable",
    platform: "Xbox",
    year: 2004,
    description: "A unique action RPG with moral choices and consequences.",
    image: "assets/images/#",
    rating: 85,
  },
  {
    title: "Gears of War",
    platform: "Xbox 360",
    year: 2006,
    description:
      "A gritty third-person shooter with intense cover-based combat.",
    image: "assets/images/#",
    rating: 91,
  },
  {
    title: "Mass Effect 2",
    platform: "Xbox 360",
    year: 2010,
    description:
      "A critically acclaimed space opera RPG with a compelling story.",
    image: "assets/images/#",
    rating: 96,
  },
  {
    title: "Forza Horizon 4",
    platform: "Xbox One",
    year: 2018,
    description:
      "An open-world racing game with stunning visuals and dynamic seasons.",
    image: "assets/images/#",
    rating: 92,
  },
  {
    title: "Ori and the Blind Forest",
    platform: "Xbox One",
    year: 2015,
    description:
      "A beautiful and emotional platformer with Metroidvania elements.",
    image: "assets/images/#",
    rating: 88,
  },
  {
    title: "Halo Infinite",
    platform: "Xbox Series X",
    year: 2021,
    description:
      "The latest installment in the legendary Halo franchise, featuring an open-world campaign.",
    image: "assets/images/#",
    rating: 87,
  },
  {
    title: "Forza Horizon 5",
    platform: "Xbox Series X",
    year: 2021,
    description:
      "An open-world racing game set in Mexico, with stunning visuals and a vast world.",
    image: "assets/images/#",
    rating: 92,
  },
];

const nsgames = [
  {
    title: "The Legend of Zelda",
    platform: "NES",
    year: 1986,
    description: "A groundbreaking adventure that started a legendary series.",
    image: "assets/images/#",
    rating: 91,
  },
  {
    title: "Super Mario Bros. 3",
    platform: "NES",
    year: 1988,
    description: "A platforming masterpiece with creative level design.",
    image: "assets/images/#",
    rating: 93,
  },
  {
    title: "The Legend of Zelda: A Link to the Past",
    platform: "SNES",
    year: 1991,
    description: "An epic adventure with memorable dungeons and puzzles.",
    image: "assets/images/#",
    rating: 95,
  },
  {
    title: "Super Metroid",
    platform: "SNES",
    year: 1994,
    description: "A classic action-adventure with exploration and atmosphere.",
    image: "assets/images/#",
    rating: 96,
  },
  {
    title: "Super Mario 64",
    platform: "N64",
    year: 1996,
    description: "A revolutionary 3D platformer that defined a genre.",
    image: "assets/images/#",
    rating: 94,
  },
  {
    title: "The Legend of Zelda: Ocarina of Time",
    platform: "N64",
    year: 1998,
    description: "A timeless adventure with groundbreaking gameplay.",
    image: "assets/images/",
    rating: 99,
  },
  {
    title: "Super Mario Galaxy",
    platform: "Wii",
    year: 2007,
    description: "A gravity-defying platformer with innovative gameplay.",
    image: "assets/images/#",
    rating: 97,
  },
  {
    title: "The Legend of Zelda: Skyward Sword",
    platform: "Wii",
    year: 2011,
    description:
      "An immersive adventure with motion controls and a compelling story.",
    image: "assets/images/#",
    rating: 90,
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    year: 2017,
    description: "An open-world adventure that redefined the Zelda series.",
    image: "assets/images/#",
    rating: 97,
  },
  {
    title: "Super Mario Odyssey",
    platform: "Nintendo Switch",
    year: 2017,
    description: "A delightful 3D platformer with creative gameplay mechanics.",
    image: "assets/images/#",
    rating: 97,
  },
];

function displayGames(games, gameListId) {
  const gameList = document.getElementById(gameListId);
  gameList.innerHTML = "";

  games.forEach((game) => {
    const gameItem = document.createElement("li");
    gameItem.classList.add("game-item");
    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="game-details">
        <h3>${game.title} (${game.year})</h3>
        <p>${game.description}</p>
      </div>
    `;
    gameList.appendChild(gameItem);
  });
}

function setupFilter(filterControlsId, games, gameListId) {
  const filterControls = document.getElementById(filterControlsId);

  filterControls.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-button")) {
      document
        .querySelectorAll(`#${filterControlsId} .filter-button`)
        .forEach((button) => {
          button.classList.remove("active");
        });
      event.target.classList.add("active");

      const filter = event.target.dataset.filter;
      if (filter === "all") {
        displayGames(games, gameListId);
      } else {
        const filteredGames = games.filter((game) => game.platform === filter);
        displayGames(filteredGames, gameListId);
      }
    }
  });
}

// Nintendo Games
if (document.getElementById("game-list-ns")) {
  displayGames(nsgames, "game-list-ns");
  setupFilter("filter-controls-ns", nsgames, "game-list-ns");
}

// Xbox Games
if (document.getElementById("game-list-xbox")) {
  displayGames(xboxgames, "game-list-xbox");
  setupFilter("filter-controls-xbox", xboxgames, "game-list-xbox");
}

// Playstation Games
if (document.getElementById("game-list-ps")) {
  displayGames(psgames, "game-list-ps");
  setupFilter("filter-controls-ps", psgames, "game-list-ps");
}
