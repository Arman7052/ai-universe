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
                      <section id = "show-modal">

      
                      </section>
  
                      </div>
                        
                      <div class ="pt-3">
                      <button onclick="showDetails('${card.id}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cardInformation">
                              <span> &#10132; </span>
                      </button>
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
    .then((data) => {
      // console.log(data);
      showModalData(data);

    });

};

// Modal part  //     

const showModalData = modalData => {
  // console.log(modalData)
  
  const apiInfo = document.getElementById('modalBodyLabel');
  apiInfo.innerHTML = `

  <div class=" d-flex justify-content-between ">
  <div class=" border border-1 rounded border-secondary-subtle container bg-danger-subtle w-auto">
  <div class="pb-4">${modalData.data.description}</div>
  <div class="container d-flex justify-content-between bg-body-secondary  border border-1 rounded border-secondary-subtle ">
   <div class="text-success container w-auto ">
           <p>${modalData.data.pricing[0].price}</p>
           <p>${modalData.data.pricing[0].plan}</p>
   </div>
   <div class="container text-warning w-auto ">
           <p>${modalData.data.pricing[1].price}</p>
           <p>${modalData.data.pricing[1].plan}</p>
   </div>
   <div class="container text-danger w-auto">
           <p>${modalData.data.pricing[2].price}</p>
           <p>${modalData.data.pricing[2].plan}</p>
   </div>
  </div>
  <div class="d-flex justify-content-between pt-3">
     <div>
     <h3 class="fs-3 fw-semibold">Features</h3>
     <ul>
        <li>${modalData.data.features}</li>
        <li>${modalData.data.features}</li>
        <li>${modalData.data.features}</li>
   </ul>
     </div>
     <div>
     <h3 class="fs-3 fw-semibold">Integrations</h3>
     <ul>
        <li>${modalData.data.integrations[0]}</li>
        <li>${modalData.data.integrations[1]}</li>
        <li>${modalData.data.integrations[2]}</li>
   </ul>
     </div>
  </div>
  </div>
  
  <div class=" container border border-1 rounded w-auto">
            <img src="${modalData.data.image_link[0]}" class="card-img-top rounded mx-auto d-block p-4 rounded rounded-2" alt="...">
           
            <h5 >${modalData.data.input_output_examples[0].input}</h5>
            <p>${modalData.data.input_output_examples[0].output}</p>
            
  </div>


  </div>

  `

}

// Click see more button and show all cards //

const showAllCard = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showAllData(data.data.tools);
    })
};

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader--hidden");

  document.querySelector(".loader").addEventListener("transitionend", () => {
    document.body.removeChild(document.querySelector(".loader"));
  })
});

loadAllData();