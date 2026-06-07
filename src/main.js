import "./style.css";

const menuBtn = document.querySelector("#menu-btn");
const drawer = document.querySelector("#drawer");
const overlay = document.querySelector("#overlay");
const menuIcon = document.querySelector("#menu-icon");

let isOpen = false;

function renderMenu() {
  // Drawer.
  drawer.classList.toggle("translate-x-0", isOpen);
  drawer.classList.toggle("translate-x-full", !isOpen);

  // Overlay.
  overlay.classList.toggle("opacity-50", isOpen);
  overlay.classList.toggle("pointer-events-auto", isOpen);
  overlay.classList.toggle("opacity-0", !isOpen);
  overlay.classList.toggle("pointer-events-none", !isOpen);

  // ARIA.
  menuBtn.setAttribute("aria-expanded", String(isOpen));

  // Ícono.
  menuIcon.src = isOpen ? "./src/assets/img/icon-menu-close.svg" : "./src/assets/img/icon-menu.svg";
}

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  renderMenu();
});
