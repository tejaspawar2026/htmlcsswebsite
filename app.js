const h = document.querySelector(".hamburger");
const n = document.querySelector(".nav-menu");

h.addEventListener("click", () => {
    h.classList.toggle("active");
    n.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        h.classList.remove("active");
        n.classList.remove("active");
    });
});
