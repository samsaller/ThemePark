const burger = document.querySelector(".burger");
const navContainer = document.querySelector(".nav-container");
const burgerContainer = document.querySelector(".burger-container");
const nav = document.querySelector("nav");

const inPages = window.location.pathname.includes("/pages/");
const basePath = inPages ? "../" : "./";
const navLinksObj = [
    { text: "Attractions", href: basePath + "pages/attractions.html" },
    { text: "Contact Us", href: basePath + "pages/contact.html" },
    { text: "Map", href: basePath + "pages/map.html" },
    { text: "Tickets", href: basePath + "pages/tickets.html" },
    { text: "Events", href: basePath + "pages/events.html" },
    { text: "Dining", href: basePath + "pages/dining.html" },
    { text: "About Us", href: basePath + "pages/about.html" },
];
// <ul class="nav-links">
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
// </ul>
let lastBurgerState;
function createNavLinks() {
    const burgerStyle = window.getComputedStyle(burger);
    let currentBurgerState = burgerStyle.getPropertyValue("display")
    if(lastBurgerState === currentBurgerState){
        return;
    }
    lastBurgerState = currentBurgerState;

    document.querySelector(".nav-links")?.remove();

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");

    navLinksObj.forEach((linkObj) => {
        const li = document.createElement("li");
        li.classList.add("muted", "nav-item");

        const a = document.createElement("a");
        a.href = linkObj.href;
        a.textContent = linkObj.text;

        li.appendChild(a);
        navLinks.appendChild(li);
    });

    if (currentBurgerState === "none") {
        navContainer.appendChild(navLinks);
    } else {
        burgerContainer.appendChild(navLinks);
    }
}

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    burgerContainer.classList.toggle("deactive");
});

createNavLinks();
window.addEventListener("resize", () => {
    createNavLinks();
});

window.addEventListener("scroll", (e) => {
    if (window.scrollY) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
