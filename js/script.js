// Open-close navigation
const nav = document.querySelector(".nav");
const navOpenButton = document.querySelector(".nav-open-button");
const navCloseButton = document.querySelector(".nav__close-button img");

navOpenButton.onclick = () => nav.style.top = "0";
navCloseButton.onclick = () => nav.style.top = "-100%";