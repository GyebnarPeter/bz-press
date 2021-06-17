// Open-close navigation
const nav = document.querySelector(".nav");
const navOpenButton = document.querySelector(".nav-open-button");
const navCloseButton = document.querySelector(".nav__close-button img");

navOpenButton.onclick = () => nav.style.transform = "translateY(0)";
navCloseButton.onclick = () => nav.style.transform = "translateY(-100%)";

// Slider
/* const sliderPages = document.querySelectorAll(".slider__page");

let i = 0;
setInterval(function() {
    if(i >= sliderPages.length) i = 0;
    sliderPages.forEach(item => item.style.opacity = "0");
    sliderPages[i].style.opacity = "1";
    ++i;
}, 10000); */

// Scroll animations
const header = document.querySelector(".header");
const floatBoxes = document.querySelectorAll(".float-box");
const fadeFirst = document.querySelectorAll(".fade-first");
const fadeSecond = document.querySelectorAll(".fade-second");

function fadeEffect(elements, duration) {
    elements.forEach( item => {
        if(document.documentElement.scrollTop > item.offsetTop - window.innerHeight) {
            setTimeout(function() {
                item.style.opacity = "1"
            }, duration);
        }
    });
}

window.onscroll = () => {

    // With scroll the header get background color
    if(document.documentElement.scrollTop > 0) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }

    // Float elements
    floatBoxes.forEach( box => {
        if(document.documentElement.scrollTop > box.offsetTop + 200) {
            box.firstElementChild.style.transform = "translateY(0)";
        }
    });

    fadeEffect(fadeFirst, 2000);
    fadeEffect(fadeSecond, 3000);
}