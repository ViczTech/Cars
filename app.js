const menu = document.getElementById("menu"); // Menu icon element
const login = document.getElementById("login"); // Login button element
const sign = document.getElementById("sign-up"); // Sign-up button element
const items = document.getElementById("nav-items"); // Navigation items container
const navBTN = document.getElementById("nav-btn"); // Navigation button element

// Get the current window width
// const windowWidth = window.innerWidth;

// Add a click event listener to the menu icon
menu.addEventListener("click", function () {
  // Check if the menu icon currently has the 'fa-bars' class
  if (menu.classList.contains("fa-bars")) {
    // If it does, remove the 'fa-bars' class and add the 'fa-x' class
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-x");
    // Display the navigation items
    items.style.display = "flex";
  } else {
    // If it doesn't, add the 'fa-bars' class and remove the 'fa-x' class
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-x");
    // Hide the navigation items
    items.style.display = "none";
  }
});
