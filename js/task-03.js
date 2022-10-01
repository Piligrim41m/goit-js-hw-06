const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const parentElement = document.querySelector('ul.gallery');
parentElement.style.display = 'flex';
parentElement.style.gap = '10px';
console.log(parentElement)

const makeImages = image => {
  return images.map(image => {
  const newElementLi = document.createElement("li")
  newElementLi.classList.add("item");
    const imageElement = `<img class='pic' src='${image.url}' alt='image.alt' width = 400>`;
    newElementLi.insertAdjacentHTML("beforeend", imageElement)
    return newElementLi;
})
}
const elements = makeImages(images);
parentElement.append(...elements);

// const parentElement = document.querySelector('ul.gallery');
// parentElement.style.display = 'flex';
// parentElement.style.gap = '10px';
// console.log(parentElement)

// const makeImages = image => {
//   return images.map(image => {
//   const newElementLi = document.createElement("li")
//   newElementLi.classList.add("item");
//   const imageElement = document.createElement('img');
//   imageElement.src = image.url;
//   imageElement.alt = image.alt;
//   imageElement.width = 400;
//   newElementLi.appendChild(imageElement);
// console.log(newElementLi)
//     return newElementLi;
// })
// }
// const elements = makeImages(images);
// parentElement.append(...elements);
