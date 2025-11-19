const ball1 = document.querySelector(".hero-ball1");
const ball2 = document.querySelector(".hero-ball2");
const heroQuote = document.querySelector(".hero-quote-home");

const heroQuotes = [
    "THE FUTURE OF FUN",
    "WHERE FUTURE IS TODAY",
    "STEP INTO THE FUTURE",
    "YOUR ADVENTURE AWAITS",
    "LEVEL UP YOUR LIFE",
    "DISCOVER. PLAY. ENJOY.",
];

function moveBalls() {
    let x1 = Math.sin(Date.now() / 500) * 10;
    let y1 = Math.cos(Date.now() / 1000) * 20;
    let x2 = Math.cos(Date.now() / 1000) * 20;
    let y2 = Math.sin(Date.now() / 1000) * 10;

    ball1.style = `transform: translate(${x1}px, ${y1}px)`;
    ball2.style = `transform: translate(${x2}px, ${y2}px)`;
}

let currentTitleIndex = 0;
let titleChangeInterval = 3000;
let overallFadeDuration = 1000;
let fadeDuration = overallFadeDuration / 2;

function changeQuote() {
    const oldLetterList = heroQuotes[currentTitleIndex].split("");

    currentTitleIndex = (currentTitleIndex + 1) % heroQuotes.length;

    const newLetterList = heroQuotes[currentTitleIndex].split("");

    let eachOldLetterDelay = fadeDuration / oldLetterList.length;
    let eachNewLetterDelay = fadeDuration / newLetterList.length;

    oldLetterList.forEach((letter, index) => {
        setTimeout(() => {
            heroQuote.textContent = heroQuote.textContent.slice(0, -1);
        }, index * eachOldLetterDelay);
    });
    newLetterList.forEach((letter, index) => {
        setTimeout(() => {
            heroQuote.textContent += letter;
        }, fadeDuration + index * eachNewLetterDelay);
    })
}
if(heroQuote){
    changeQuote();
    setInterval(() => {
        changeQuote();
    }, titleChangeInterval);
}

function animateHero() {
    moveBalls();
    requestAnimationFrame(animateHero);
}

animateHero();
