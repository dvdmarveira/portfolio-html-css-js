function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modo claro e noturno

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Typed.js
const selectTyped = document.querySelector(".typed");
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// Navbar Scrollspy
let navbarlinks = document.querySelectorAll(".nav-links a");

function navlinksScrollspy() {
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".nav-links a.active")
        .forEach((link) => link.classList.remove("active"));
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navlinksScrollspy);
document.addEventListener("scroll", navlinksScrollspy);

// Navbar Scroll
const navBar = document.getElementById("nav-links");
const desktopNav = document.getElementById("desktop-nav");
const navItem = document.getElementById("theme_mode");
const navParent = navItem.parentNode;

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    navItem.style.display = "none";
    navBar.classList.add("scrolled");
    desktopNav.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
    desktopNav.classList.remove("scrolled");
    navItem.style.display = "block";
  }
});

// Zoom out init
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);
