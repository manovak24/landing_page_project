// window.onscroll = function() {myFunction()};

const navbar = document.querySelector(".top-bar");

const sticky = navbar.offsetTop;

console.log(sticky + "sticky")
console.log(scrollY)

document.addEventListener("scroll", () => {
    if (scrollY > 100) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

      console.log(scrollY + "scroll")
})