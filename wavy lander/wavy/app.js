const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
var links = document.querySelector(".nav-links li")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
console.log('d')