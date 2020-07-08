/* (c) IGOR KOWALCZYK. All rights reserved. */

const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem('theme');
const meta = document.querySelector('meta[name="theme-color"]');
if (currenttheme) {
document.documentElement.setAttribute('data-theme', currenttheme);
if (currenttheme === 'dark') {
toggletheme.checked = true;
}
}
function switchtheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
meta.setAttribute("content", "#222");
localStorage.setItem('theme', 'dark');
}
else {
document.documentElement.setAttribute('data-theme', 'light');
meta.setAttribute("content", "#ffffff");
localStorage.setItem('theme', 'light');
}
}
toggletheme.addEventListener('change', switchtheme, false);

const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const navbarlinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll(".main-section");
menu.addEventListener("click", () => {
body.classList.toggle("no-scroll");
menu.classList.toggle("open");
navbar.classList.toggle("open");
overlay.classList.toggle("open");
});
overlay.addEventListener("click", () => menu.click());
navbarlinks.forEach(navbarlink => {
navbarlink.addEventListener("click", e => {
menu.click();
});
});

var scrollposition = window.scrollY;
var logocontainer = document.getElementsByClassName('menu-shadow')[0];
window.addEventListener('scroll', function() {
scrollposition = window.scrollY;
if (scrollposition >= 40) {
logocontainer.classList.add('scrolled');
} else {
logocontainer.classList.remove('scrolled');
}
});

window.onscroll = findViewingLink;
findViewingLink();
function findViewingLink() {
const viewingSection = Array.from(sections)
.reverse()
.find(section => section.getBoundingClientRect().top <= 80);
if (viewingSection) {
Array.from(navbarLinks).forEach(navbarLink => {
if (navbarLink.getAttribute("href") === `#${viewingSection.getAttribute("id")}`) {
navbarLink.classList.add("selected");
} else {
navbarLink.classList.remove("selected");
}
});
}
}

var date = document.querySelector(".date");
date.innerHTML = (new Date().getFullYear());
