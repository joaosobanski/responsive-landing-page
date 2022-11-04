const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -5,
  delay: 0.1,
  duration: 0.1,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -5,
  delay: 0.4,
  duration: 0.1,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -5,
  delay: 0.5,
  duration: 0.1,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  x: -20,
  delay: 0.3,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  x: -20,
  delay: 0.7,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  x: -50,
  delay: .9,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  x: 150,
  delay: .6,
  duration: 1,
});
// ==== grid-col-item ==== //
gsap.from(".service", {
  opacity: 0,
  x: 50,
  delay: .3,
  duration: 1,
});
