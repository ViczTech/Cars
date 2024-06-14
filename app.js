const menu = document.getElementById("menu");
const login = document.getElementById("login");
const sign = document.getElementById("sign-up");
const items = document.getElementById("nav-items");
const navBTN = document.getElementById("nav-btn");

const windowWidth = window.innerWidth;

console.log(windowWidth);

menu.addEventListener('click', function() {
  if (menu.classList.contains('fa-bars')) {
      menu.classList.remove('fa-bars');
      menu.classList.add('fa-x');
      items.style.display = 'flex';
  } else {
      menu.classList.add('fa-bars');
      menu.classList.remove('fa-x');
      items.style.display = 'none';
  }
})



