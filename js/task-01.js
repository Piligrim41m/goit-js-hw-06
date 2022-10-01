const navCategories = document.querySelector("#categories");

const elemLi = document.querySelectorAll(".item");
console.log("Number of categories:", elemLi.length);

const valueLiItem = document.querySelectorAll("li.item");
valueLiItem.forEach((valueLiItem) => {
    console.log("Category:", valueLiItem.firstElementChild.textContent);
const sumElemLi = valueLiItem.querySelectorAll("li")
    console.log("Elements:", sumElemLi.length)    
}); 
