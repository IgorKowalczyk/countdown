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
e.preventDefault();

setTimeout(
() => ScrollTo.scrollVerticalToElementById(navbarLink.getAttribute("href").slice(1), 60),
window.innerWidth >= 800 ? 0 : 150
);

menu.click();
});
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

var ScrollTo = {
documentVerticalScrollPosition: function() {
if (self.pageYOffset) return self.pageYOffset;
if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
if (document.body.scrollTop) return document.body.scrollTop;
return 0;
},

viewportHeight: function() {
return document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
},

documentHeight: function() {
return document.height !== undefined ? document.height : document.body.offsetHeight;
},

documentMaximumScrollPosition: function() {
return this.documentHeight() - this.viewportHeight();
},

elementVerticalClientPositionById: function(id) {
var element = document.getElementById(id);
var rectangle = element.getBoundingClientRect();
return rectangle.top;
},

scrollVerticalTickToPosition: function(currentPosition, targetPosition) {
var filter = 0.2;
var fps = 60;
var difference = parseFloat(targetPosition) - parseFloat(currentPosition);

var arrived = Math.abs(difference) <= 0.5;
if (arrived) {
scrollTo(0.0, targetPosition);
return;
}

currentPosition = parseFloat(currentPosition) * (1.0 - filter) + parseFloat(targetPosition) * filter;

scrollTo(0.0, Math.round(currentPosition));

setTimeout(
"ScrollTo.scrollVerticalTickToPosition(" + currentPosition + ", " + targetPosition + ")",
1000 / fps
);
},

scrollVerticalToElementById: function(id, padding) {
var element = document.getElementById(id);
if (element == null) {
console.warn("Cannot find element with id '" + id + "'.");
return;
}

var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
var currentPosition = this.documentVerticalScrollPosition();

var maximumScrollPosition = this.documentMaximumScrollPosition();
if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;
this.scrollVerticalTickToPosition(currentPosition, targetPosition);
}
};
