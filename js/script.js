// Open-close navigation
const nav = document.querySelector(".nav");
const navOpenButton = document.querySelector(".nav-open-button");
const navCloseButton = document.querySelector(".nav__close-button img");

navOpenButton.onclick = () => {
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
};
navCloseButton.onclick = () => {
    nav.style.transform = "translateY(-100%)";
    nav.style.opacity = "0";
};