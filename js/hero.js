const ball1 = document.querySelector('.hero-ball1');
const ball2 = document.querySelector('.hero-ball2');

const heroTitles = [
    "THE FUTURE OF FUN",
    "WHERE GAMES COME ALIVE",
    "PLAY. HAVE FUN. CONNECT.",
    "YOUR ADVENTURE AWAITS",
    "LEVEL UP YOUR LIFE",
    "DISCOVER. PLAY. ENJOY.",
]

const heroTitleElement = document.querySelector('.hero-title');

function moveBalls(e){
    let x1 = Math.sin(Date.now() / 500) * 10;
    let y1 = Math.cos(Date.now() / 1000) * 20;
    let x2 = Math.cos(Date.now() / 1000) * 20;
    let y2 = Math.sin(Date.now() / 1000) * 10;

    ball1.style = `transform: translate(${x1}px, ${y1}px)`
    ball2.style = `transform: translate(${x2}px, ${y2}px)`

    requestAnimationFrame(moveBalls);
}

moveBalls()