// JavaScript for handling responsive navigation
document.addEventListener("DOMContentLoaded", function () {
  const menuIcons = document.querySelectorAll(".menu-icon");
  const navLists = document.querySelectorAll(".navbar ul");

  menuIcons.forEach((menuIcon, index) => {
    menuIcon.addEventListener("click", () => {
      navLists.forEach((navList, i) => {
        if (i === index) {
          navList.classList.toggle("show");
        } else {
          navList.classList.remove("show");
        }
      });
    });
  });
});
