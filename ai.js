
let jsonData;
let showAllCards = false;
const toolsContainer = document.getElementById("create-cards");
const seeMoreButton = document.getElementById("see-more-button");

async function fetchToolsData() {
  try {
    const response = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await response.json();
    jsonData = data;
  } catch (error) {
    console.error(error);
  }
}



function createToolCard(tool) {
    const toolCard = document.createElement("div");
    toolCard.classList.add("tool-card");
    toolCard.innerHTML = `
    <div class="card h-100 shadow-lg">
    <div class="m-4 rounded-4"><img src="${tool.image}" class="card-img-top" alt="${tool.name}"></div>
    <div class="card-body">
      <h1>Features</h1>
      <div id="features-container"></div>
      <p id="features-container"></p>
    </div>
    <div class="card-footer">
      <h5 class="card-title">${tool.name}</h5>
      <div class="d-flex justify-content-between"> 
        <div>
          <strong><i class="fa-sharp fa-solid fa-calendar-days"></i></strong> 
          <small class="text-muted">${tool.published_in}</small>
        </div>
        <div class="card-footer-icon">
          <button class="border border-0 btn btn-light" data-bs-toggle="modal" data-bs-target="#toolModal${tool.id}">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="toolModal${tool.id}" tabindex="-1" aria-labelledby="toolModalLabel${tool.id}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="toolModalLabel${tool.id}">${tool.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${tool.image}" class="card-img-top" alt="${tool.name}">
          <p>${tool.description}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    const featuresContainer = toolCard.querySelector("#features-container");
const featuresList = document.createElement("ul");
featuresList.classList.add();

tool.features.forEach(feature => {
  const featureItem = document.createElement("li");
  featureItem.classList.add("list-group-item");
  featureItem.textContent = feature;
  featuresList.appendChild(featureItem);
});

featuresContainer.appendChild(featuresList);

    return toolCard;
  }

function renderToolCards(tools) {
  toolsContainer.innerHTML = "";
  const firstSixTools = tools.slice(0, 6);

  firstSixTools.forEach(tool => {
    const toolCard = createToolCard(tool);
    toolsContainer.appendChild(toolCard);
  });
}

function renderAllToolCards(tools) {
  toolsContainer.innerHTML = "";
  
  tools.forEach(tool => {
    const toolCard = createToolCard(tool);
    toolsContainer.appendChild(toolCard);
  });
}

function handleSeeMoreButtonClick() {
  showAllCards = true;
  
  if (showAllCards) {
    renderAllToolCards(jsonData.data.tools);
  } else {
    renderToolCards(jsonData.data.tools);
  }
}

async function init() {
  await fetchToolsData();
  renderToolCards(jsonData.data.tools);
  seeMoreButton.addEventListener("click", handleSeeMoreButtonClick);
}



init();




