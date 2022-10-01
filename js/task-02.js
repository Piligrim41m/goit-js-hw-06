const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach((ingredient) => {
  const newElementLi = document.createElement("li")
  newElementLi.classList.add("item");
  newElementLi.textContent = ingredient;
  const parentElement = document.querySelector('#ingredients');
  parentElement.appendChild(newElementLi);
 })



    



    
