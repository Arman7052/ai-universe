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
// console.log(firstSixCards);

};

loadData();

