const burger = document.querySelector(".burger");
const navContainer = document.querySelector(".nav-container");
const burgerContainer = document.querySelector(".burger-container");
const nav = document.querySelector("nav");

const navLinksObj = [
    { text: "Attractions", href: "/pages/attractions.html" },
    { text: "Blank2", href: "#" },
    { text: "Blank3", href: "#" },
    { text: "Blank4", href: "#" },
];
// <ul class="nav-links">
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
//     <li class="muted nav-item"><a href="#">Blank</a></li>
// </ul>

function createNavLinks() {
    const burgerStyle = window.getComputedStyle(burger);
    
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

    if (burgerStyle.getPropertyValue("display") === "none") {
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


window.addEventListener("scroll", (e)=>{
    if(window.scrollY){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})