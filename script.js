
// ==========================================
// PART 1: FIND THE HTML ELEMENTS
// These IDs must match the IDs in index.html.
// ==========================================

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// ==========================================
// PART 2: MOBILE MENU BUTTON
// When clicked, show or hide the navigation.
// ==========================================

menuButton.addEventListener("click", function () {

    // Add the "active" class if hidden,
    // or remove it if the menu is already open.
    navLinks.classList.toggle("active");

    // Update the accessibility state.
    const isOpen = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen);

});


// ==========================================
// PART 3: CLOSE THE MENU AFTER A LINK CLICK
// Useful when viewing the site on a phone.
// ==========================================

const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Hide the mobile menu after choosing a section.
        navLinks.classList.remove("active");

        // Tell assistive technology the menu is closed.
        menuButton.setAttribute("aria-expanded", "false");

    });

});


// ==========================================
// PART 4: WELCOME MESSAGE IN THE CONSOLE
// This is just a learning example.
// Open your browser's developer tools to see it.
// ==========================================

console.log("Welcome to my portfolio website!");
