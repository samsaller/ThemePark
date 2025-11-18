const footer = document.querySelector("footer");
const contributors = ["KAIU", "GZX", "KGH", "HS", "KKK"];

let copyrightText = "©";

contributors.forEach((contributor) => {
    copyrightText += ` ${contributor}`;
});

footer.querySelector(".copyright").textContent = copyrightText;
