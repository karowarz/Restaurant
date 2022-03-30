import '../scss/app.scss';

const eventListeners = {
  navButton: '[data-toggle-btn]',
  navPanel: '[data-nav-open]',
  navIcon: '[data-nav-icon]',
};

const navToggle = document.querySelector(eventListeners.navButton);
const navPanel = document.querySelector(eventListeners.navPanel);
const toggleIcon = document.querySelector(eventListeners.navIcon);

navToggle.addEventListener('click', () => {
  const openedNav = navPanel.getAttribute('data-nav-open');
  if (openedNav === 'false') {
    navPanel.setAttribute('data-nav-open', 'true');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
  } else {
    navPanel.setAttribute('data-nav-open', 'false');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
  }
});
