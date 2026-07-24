const header = document.querySelector(".header");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    document.querySelector(".loader-wrapper").style.display = "none";
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

let lastScrollTop = 0;

window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Background effect
    if(scrollTop > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    // MOBILE + DESKTOP HIDE/SHOW NAVBAR
    if(scrollTop > lastScrollTop && scrollTop > 120){

        // Scroll Down
        header.classList.add("hide-navbar");

    } else {

        // Scroll Up
        header.classList.remove("hide-navbar");

    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

});

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// =========================
// DARK MODE
// =========================

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    // Change icon
    const icon = themeToggle.querySelector("i");

    if (body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// =========================================
// FAQ ACCORDION
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// =========================
// SAVE THEME
// =========================

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark-mode");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}