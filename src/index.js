import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu-template.hbs';

const bodyTheme = document.querySelector('body')
const menuRef = document.querySelector('.js-menu');
const themeToggle = document.querySelector('.theme-switch__toggle')

themeToggle.addEventListener('change', onThemeToggleChange);

bodyTheme.classList.add('light-theme');
populateBodyTheme();
keepCheckboxChecked();


function onThemeToggleChange(event) {
    bodyTheme.classList.toggle('dark-theme');
    bodyTheme.classList.toggle('light-theme');

    const currentTheme = bodyTheme.classList.value;
    localStorage.setItem('body-theme', currentTheme);
}

function populateBodyTheme() {
    const savedTheme = localStorage.getItem('body-theme');
    if (savedTheme) {
        bodyTheme.classList.value = savedTheme;
    }
}

function keepCheckboxChecked() {
    if (bodyTheme.classList.contains('dark-theme')) {
        themeToggle.checked = true;
    }
}
const menuMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup)
