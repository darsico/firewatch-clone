const nav = document.querySelector("#nav");
const menuIcon = document.getElementById("menu-icon");
const menuImg = "./images/menu.svg";
const closeImg = "./images/x.svg";

function show() {
  const active = nav.classList.toggle("active");

  active ? (menuIcon.src = closeImg) : (menuIcon.src = menuImg);
}

menuIcon.addEventListener("click", show);
