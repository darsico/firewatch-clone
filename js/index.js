//Mobile Menu Variables
const nav = document.querySelector("#nav");
const menuIcon = document.getElementById("menu-icon");
const menuImg = "./images/menu.svg";
const closeImg = "./images/x.svg";

//Mobile Menu function
const show = () => {
  let active = nav.classList.toggle("active");

  active ? (menuIcon.src = closeImg) : (menuIcon.src = menuImg);
};
menuIcon.addEventListener("click", show);

const parallax0 = document.getElementById("parallax0");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const parallax3 = document.getElementById("parallax3");
const parallax4 = document.getElementById("parallax4");
const parallax5 = document.getElementById("parallax5");
const parallax6 = document.getElementById("parallax6");
const parallax7 = document.getElementById("parallax7");
const parallax8 = document.getElementById("parallax8");

// window.addEventListener("scroll", () => {
//   const value = window.scrollY;

//   parallax0.style.top = value * 0 + "px";
//   parallax1.style.top = -value * 0.15 + "px";
//   parallax2.style.top = -value * 0.2 + "px";
//   parallax3.style.top = -value * 0.25 + "px";
//   parallax4.style.top = -value * 0.3 + "px";
//   parallax5.style.top = -value * 0.35 + "px";
//   parallax6.style.top = -value * 0.4 + "px";
//   parallax7.style.top = -value * 0.5 + "px";
//   parallax8.style.top = -value * 0.6 + "px";
// });

window.onscroll = function () {
  const winScroll = window.scrollY;

  parallax1.style.transform = `translate(0, ${winScroll / 11.2}%)`;
  parallax2.style.transform = `translate(0, ${winScroll / 11}%)`;
  parallax3.style.transform = `translate(0, ${winScroll / 13.7}%)`;
  parallax4.style.transform = `translate(0, ${winScroll / 14}%)`;
  parallax5.style.transform = `translate(0, ${winScroll / 20}%)`;
  parallax6.style.transform = `translate(0, ${winScroll / 50}%)`;
  parallax7.style.transform = `translate(0, ${winScroll / -150}%) `;
  parallax8.style.transform = `translate(0, ${winScroll / 1500}%) `;
};
