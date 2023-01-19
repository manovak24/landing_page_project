const navbar = document.querySelector(".top-bar");

document.addEventListener("scroll", () => {
    if (scrollY > 100) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
})