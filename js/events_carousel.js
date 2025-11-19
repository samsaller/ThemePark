const eventsCarouselEl = document.querySelector(".events-carousel");
const eventsCarouselImgEl = eventsCarouselEl.querySelector("img");

const carouselImgs = [
    "./imgs/Hologram.png",
    "./imgs/CosmicShow.png",
    "./imgs/NeonWave.png",
    "./imgs/EventsWaiting.png",
];

const carouselDuration = 5000;

let currentCarouselImg = 3;

eventsCarouselEl.style = "animation-name: carousel;";

setInterval(() => {
    currentCarouselImg = (currentCarouselImg + 1) % carouselImgs.length;
    eventsCarouselImgEl.setAttribute("src", carouselImgs[currentCarouselImg]);
}, carouselDuration);
