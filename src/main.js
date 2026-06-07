import "./style.css";

// Selecciona elementos del DOM
const menuBtn = document.querySelector("#menu-btn");
const drawer = document.querySelector("#drawer");
const overlay = document.querySelector("#overlay");
const menuIcon = document.querySelector("#menu-icon");

let isOpen = false;

function renderMenu() {
  // Drawer visible/oculto
  drawer.classList.toggle("translate-x-0", isOpen);
  drawer.classList.toggle("translate-x-full", !isOpen);

  // Overlay visible/oculto + interacción
  overlay.classList.toggle("opacity-50", isOpen);
  overlay.classList.toggle("pointer-events-auto", isOpen);
  overlay.classList.toggle("opacity-0", !isOpen);
  overlay.classList.toggle("pointer-events-none", !isOpen);

  // Botón: accesibilidad + stacking
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.classList.toggle("z-50", isOpen);
  menuBtn.classList.toggle("z-20", !isOpen);

  // Icono del menú
  menuIcon.src = isOpen ? "./src/assets/img/icon-menu-close.svg" : "./src/assets/img/icon-menu.svg";
}

menuBtn.addEventListener("click", () => {
  // Cambia el estado (abre/cierra menú)
  isOpen = !isOpen;
  // Actualiza la UI según el nuevo estado
  renderMenu();
});
