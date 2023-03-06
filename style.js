const loadData = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response => response.json())
    .then(data => showData(data))
    .catch((error) => {
      console.log(error);
    });
};

const showData = (data) => {
  //  console.log(data);
  const jsonData = data;
  // Get 1st 6 cards Details //
  const firstSixCards = jsonData.data.tools.slice(0, 6);
  // Show card information dynamically //
  for (let singleData of firstSixCards) {
    const container = document.getElementById("create-cards")
    const div = document.createElement("div");
    div.innerHTML = `
   
    <div class="card">
    <div class="m-4 rounded-4"><img src="${singleData.image}" class="card-img-top" alt="${singleData.name}"></div>
    <div class="card-body">
      
      <h1>Features</h1>
      <p id="features-container"></p>
    </div>
    <div class="card-footer">
    <h5 class="card-title">${singleData.name}</h5>
    
    <div><strong><i class="fa-sharp fa-solid fa-calendar-days"></i></strong> <small class="text-muted">${singleData.published_in}</small></div>
    <div></div>
    </div>
  </div>
  
    `;
    container.appendChild(div);
  };
};

loadData();