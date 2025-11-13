const heroQuoteTimer = document.querySelector(".hero-quote-timer");

let timer = 5000;

function changeTimerText() {
    heroQuoteTimer.innerHTML =`You will be redirected to the home page in <span>${timer / 1000}</span> seconds.`;
}

changeTimerText();

setInterval(() => {
    timer -= 1000;
    if (timer <= 0) {
        window.location.href = "../index.html";
    }
    changeTimerText();
}, 1000);
