const menuPage = document.querySelector("#menuPage");
const menuBtns = document.querySelectorAll(".menuBtn");
const closeBtns = document.querySelectorAll(".closeBtn");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", openMenu);
});

function openMenu(e) {
  e.preventDefault();
  if (menuPage.classList.contains("-translate-x-full")) {
    menuPage.classList.remove("translate-x-full");
    menuPage.classList.add("translate-x-0");
  }
}

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeMenu);
});

function closeMenu(e) {
  e.preventDefault();
  if (menuPage.classList.contains("translate-x-0")) {
    menuPage.classList.remove("translate-x-0");
    menuPage.classList.add("-translate-x-full");
  }
}

const infoBtn = document.querySelector("#infoBtn");
const infoSection = document.querySelector("#infoSection");

if (infoBtn) {
  infoBtn.addEventListener("click", gotoInfo);
}
function gotoInfo(e) {
  e.preventDefault();
  document.getElementById("infoSection").scrollIntoView({ behavior: "smooth" });
  if (menuPage.classList.contains("translate-x-0")) {
    menuPage.classList.remove("translate-x-0");
    menuPage.classList.add("-translate-x-full");
  }
}

const expBtn = document.querySelector("#expBtn");
const expSection = document.querySelector("#expSection");

if (expBtn) {
  expBtn.addEventListener("click", gotoExp);
}
function gotoExp(e) {
  e.preventDefault();
  document.getElementById("expSection").scrollIntoView({ behavior: "smooth" });
  if (menuPage.classList.contains("translate-x-0")) {
    menuPage.classList.remove("translate-x-0");
    menuPage.classList.add("-translate-x-full");
  }
}

const projectBtn = document.querySelector("#projectBtn");
const projectSection = document.querySelector("#projectSection");

if (projectBtn) {
  projectBtn.addEventListener("click", gotoProject);
}
function gotoProject(e) {
  e.preventDefault();
  document.getElementById("projectSection").scrollIntoView({ behavior: "smooth" });
  if (menuPage.classList.contains("translate-x-0")) {
    menuPage.classList.remove("translate-x-0");
    menuPage.classList.add("-translate-x-full");
  }
}

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

const mouseWheel = document.querySelector(".items");

mouseWheel.addEventListener("wheel", function (e) {
  const race = 200;

  if (e.deltaY > 0)
    // Scroll right
    mouseWheel.scrollLeft += race;
  // Scroll left
  else mouseWheel.scrollLeft -= race;
  e.preventDefault();
});
