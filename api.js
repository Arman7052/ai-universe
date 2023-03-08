let allData;

const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            allData = data;
            showAllData(data.data.tools.slice(0, 6));
        })
}

const showAllData = (cards) => {
    const cardContainer = document.getElementById("show-cards");
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        // console.log(card);
        const div = document.createElement("div")
        div.innerHTML = `
        
                <div class="col h-100 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div class="card h-100 container border border-0">
                    <img src="${card.image}" class="card-img-top p-3 rounded mx-auto d-block h-50" alt="...">
                    <div class="card-body">
                      
                      <p class="card-text fs-3 fw-bold">Features</p>
                      <p>
                      <ol>
                          <li>${card.features[0]}</li>
                          <li>${card.features[1]}</li>
                          <li>${card.features[2]}</li>
                      </ol>
                  </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between mb-2">
                      <div>
                      <h5 class="card-title">${card.name}</h5>
                      <i class="fa-regular fa-calendar-days"></i><span>  </span><small class="text-muted">${card.published_in}</small>
                      </div>
                        
                      <div class ="pt-3">
                      <button onclick="showDetails('${card.id}')" class ="border border-0 bg-light "><i class="fa-solid fa-arrow-right"></i></button>
                      </div>



                    </div>
                  </div>
                </div>
        
        
        `;
        cardContainer.appendChild(div);
    });

};

// Find details from id //

const showDetails = (id) => {
// console.log(id);
const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
// console.log(URL);
    fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadAllData();


// Click see more button and show all cards //

const showAllCard =() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            allData = data;
            showAllData(data.data.tools);
        })
};
