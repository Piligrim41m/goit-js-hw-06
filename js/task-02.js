const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parentElement = document.querySelector('#ingredients');
function creatLi(text) {
  let newElementLi = document.createElement("li")
   newElementLi.classList.add("item");
  newElementLi.textContent = text;
  return newElementLi;
};

const listIngredients = ingredients.map((ingredient) => {
  return creatLi(ingredient)
});

parentElement.append(...listIngredients);
  




    



    
