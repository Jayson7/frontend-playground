var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
let toggle = document.querySelector(".toggle");
navbar = document.querySelector("nav");
toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// scrollspy section
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let classess = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove("active-nav");
                document
                    .querySelector("nav ul li a[href*=" + classess + "]")
                    .classList.add("active-nav");
            });
        }
    });
};