/* (c) IGOR KOWALCZYK. All rights reserved. */

const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll(".main-section");

menu.addEventListener("click", () => {
body.classList.toggle("no-scroll");
menu.classList.toggle("open");
navbar.classList.toggle("open");
overlay.classList.toggle("open");
});

overlay.addEventListener("click", () => menu.click());

navbarLinks.forEach(navbarLink => {
navbarLink.addEventListener("click", e => {

menu.click();
});
});
