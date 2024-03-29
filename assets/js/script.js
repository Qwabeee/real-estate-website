'use strict';

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navClose = document.querySelector("[data-nav-close-btn]");
const navOpen = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArray = [overlay, navClose, navOpen];


for (let i = 0; i < navbarLinks.length; i++) { navElemArray.push(navbarLinks[i]); }


for (let i = 0; i < navElemArray.length; i++) {
  navElemArray[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 