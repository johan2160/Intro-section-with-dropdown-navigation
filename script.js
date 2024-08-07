const navItems = document.querySelectorAll(".nav-item-parent");
const menuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navigation = document.querySelector("#navigation");


navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    const subitemContainer = navItem.lastElementChild;
    const toggleSubitemIcon = navItem.firstElementChild;

    subitemContainer.classList.toggle("show-subitems");
    toggleSubitemIcon.classList.toggle("upside-down");
  });
});

menuIcon.addEventListener('click', () => {
  navigation.classList.add("display-nav");
});

closeMenuIcon.addEventListener('click', () => {
  navigation.classList.remove("display-nav");
});