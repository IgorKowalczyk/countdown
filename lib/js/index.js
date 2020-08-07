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
const body = document.body;
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const navbarlinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll("h1");
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

window.onscroll = findviewinglink;
findviewinglink();
function findviewinglink() {
const viewingsection = Array.from(sections)
.reverse()
.find(section => section.getBoundingClientRect().top <= 80);
if (viewingsection) {
Array.from(navbarlinks).forEach(navbarlink => {
if (navbarlink.getAttribute("href") === `#${viewingsection.getAttribute("id")}`) {
navbarlink.classList.add("selected");
} else {
navbarlink.classList.remove("selected");
}
});
}
}

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

var date = document.querySelector(".date");
date.innerHTML = (new Date().getFullYear());
