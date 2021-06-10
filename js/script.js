// Open-close navigation
const nav = document.querySelector(".nav");
const navOpenButton = document.querySelector(".nav-open-button");
const navCloseButton = document.querySelector(".nav__close-button img");

navOpenButton.onclick = () => nav.style.transform = "translateY(0)";
navCloseButton.onclick = () => nav.style.transform = "translateY(-100%)";

// With scroll the header get background color
const header = document.querySelector(".header");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 0) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
}

// Slider
const sliderPages = document.querySelectorAll(".slider__page");

let i = 0;
setInterval(function() {
    if(i >= sliderPages.length) i = 0;
    sliderPages.forEach(item => item.style.opacity = "0");
    sliderPages[i].style.opacity = "1";
    ++i;
}, 10000);