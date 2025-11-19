const foodStallsCarouselEl = document.querySelector(".foodstalls-carousel");
const foodStallsCarouselImgEl = foodStallsCarouselEl.querySelector("img");

const foodStallsImgs = [
    "./imgs/AstroSnax.png",
    "./imgs/FusionFuel.png",
    "./imgs/GalaxEats.png",
    "./imgs/FoodStalls.png",
];

let currentFoodStallImg = 3;

foodStallsCarouselEl.style = "animation-name: carousel;";

setInterval(() => {
    currentFoodStallImg = (currentFoodStallImg + 1) % foodStallsImgs.length;
    foodStallsCarouselImgEl.setAttribute("src", foodStallsImgs[currentFoodStallImg]);
}, carouselDuration);
