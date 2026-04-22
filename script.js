// Global variable to store all TV show episodes fetched from the API
let allEpisodes = [];

async function setup() {
  const rootElem = document.getElementById("root");

  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

    if (!response.ok) {
      throw new Error(`Failed to load: ${response.status} ${response.statusText}`);
    }

    allEpisodes = await response.json();

    renderEpisodeGallery(allEpisodes);
    setupSearch();
    makeSelector(allEpisodes);

  } catch (error) {
    rootElem.innerHTML = `
      <div class="error-container">
        <p class="error-message">⚠️ Sorry, we couldn't load the episodes.</p>
        <p class="error-details">${error.message}</p>
        <button onclick="location.reload()">Try Again</button>
      </div>`;
  }
}

function formatEpisodeCode(episode) {
  const paddedSeason = episode.season.toString().padStart(2, "0");
  const paddedNumber = episode.number.toString().padStart(2, "0");
  return `S${paddedSeason}E${paddedNumber}`;
}

function createEpisodeCard(episode) {
  const episodeCard = document.createElement("div");
  episodeCard.classList.add("episode-card");
  const episodeCode = formatEpisodeCode(episode);
  episodeCard.innerHTML = `
    <h2>${episode.name} - ${episodeCode}</h2>
    <img src="${episode.image.medium}" alt="${episode.name}" />
    <div class="episode-summary">${episode.summary}</div>
  `;
  return episodeCard;
}

function renderEpisodeGallery(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  episodeList.forEach((episode) => {
    const card = createEpisodeCard(episode);
    rootElem.appendChild(card);
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const searchCount = document.getElementById("searchCount");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredEpisodes = allEpisodes.filter(
      (episode) =>
        episode.name.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm)
    );
    searchCount.textContent = `Displaying ${filteredEpisodes.length} / ${allEpisodes.length} episodes`;
    renderEpisodeGallery(filteredEpisodes);
  });
}

function makeSelector(episodeList) {
  const select = document.getElementById("episode-select");

  episodeList.forEach((episode) => {
    const paddedSeason = String(episode.season).padStart(2, "0");
    const paddedNumber = String(episode.number).padStart(2, "0");
    const code = `S${paddedSeason}E${paddedNumber}`;
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${episode.name}`;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const selectedCode = select.value;
    if (selectedCode === "") {
      renderEpisodeGallery(allEpisodes);
      return;
    }
    const selectedEpisode = episodeList.filter((episode) => {
      const paddedSeason = String(episode.season).padStart(2, "0");
      const paddedNumber = String(episode.number).padStart(2, "0");
      return `S${paddedSeason}E${paddedNumber}` === selectedCode;
    });
    renderEpisodeGallery(selectedEpisode);
  });
}

window.onload = setup;// Global variable to store all TV show episodes fetched from the API
let allEpisodes = [];

async function setup() {
  const rootElem = document.getElementById("root");

  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

    if (!response.ok) {
      throw new Error(`Failed to load: ${response.status} ${response.statusText}`);
    }

    allEpisodes = await response.json();

    renderEpisodeGallery(allEpisodes);
    setupSearch();
    makeSelector(allEpisodes);

  } catch (error) {
    rootElem.innerHTML = `
      <div class="error-container">
        <p class="error-message">⚠️ Sorry, we couldn't load the episodes.</p>
        <p class="error-details">${error.message}</p>
        <button onclick="location.reload()">Try Again</button>
      </div>`;
  }
}

function formatEpisodeCode(episode) {
  const paddedSeason = episode.season.toString().padStart(2, "0");
  const paddedNumber = episode.number.toString().padStart(2, "0");
  return `S${paddedSeason}E${paddedNumber}`;
}

function createEpisodeCard(episode) {
  const episodeCard = document.createElement("div");
  episodeCard.classList.add("episode-card");
  const episodeCode = formatEpisodeCode(episode);
  episodeCard.innerHTML = `
    <h2>${episode.name} - ${episodeCode}</h2>
    <img src="${episode.image.medium}" alt="${episode.name}" />
    <div class="episode-summary">${episode.summary}</div>
  `;
  return episodeCard;
}

function renderEpisodeGallery(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  episodeList.forEach((episode) => {
    const card = createEpisodeCard(episode);
    rootElem.appendChild(card);
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const searchCount = document.getElementById("searchCount");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredEpisodes = allEpisodes.filter(
      (episode) =>
        episode.name.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm)
    );
    searchCount.textContent = `Displaying ${filteredEpisodes.length} / ${allEpisodes.length} episodes`;
    renderEpisodeGallery(filteredEpisodes);
  });
}

function makeSelector(episodeList) {
  const select = document.getElementById("episode-select");

  episodeList.forEach((episode) => {
    const paddedSeason = String(episode.season).padStart(2, "0");
    const paddedNumber = String(episode.number).padStart(2, "0");
    const code = `S${paddedSeason}E${paddedNumber}`;
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${episode.name}`;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const selectedCode = select.value;
    if (selectedCode === "") {
      renderEpisodeGallery(allEpisodes);
      return;
    }
    const selectedEpisode = episodeList.filter((episode) => {
      const paddedSeason = String(episode.season).padStart(2, "0");
      const paddedNumber = String(episode.number).padStart(2, "0");
      return `S${paddedSeason}E${paddedNumber}` === selectedCode;
    });
    renderEpisodeGallery(selectedEpisode);
  });
}

window.onload = setup;
