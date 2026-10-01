// Menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano atual no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}

// Menus de escolha de loja no WhatsApp
const whatsappToggles = document.querySelectorAll('.js-whatsapp-toggle');

function closeAllWhatsappMenus(except) {
  whatsappToggles.forEach((toggle) => {
    if (toggle === except) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.nextElementSibling?.classList.remove('is-open');
  });
}

whatsappToggles.forEach((toggle) => {
  const menu = toggle.nextElementSibling;
  if (!menu) return;

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    closeAllWhatsappMenus(toggle);
  });
});

document.addEventListener('click', () => closeAllWhatsappMenus());
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAllWhatsappMenus();
});
