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