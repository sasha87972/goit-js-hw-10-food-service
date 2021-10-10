import './styles.css';
import template from './menu-template.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = template(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__toggle');

bodyRef.classList.add(localStorage.getItem('theme') || Theme.LIGHT);

if (bodyRef.classList.contains(Theme.DARK)) {
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', switchTheme);

function switchTheme() {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', 'light-theme');
  }
}
