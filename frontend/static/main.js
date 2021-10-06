import { renderAbout } from './views/about.js';
import { renderContact } from './views/contact.js';
import { renderExperience } from './views/experience.js';
import { renderHome } from './views/home.js';
import { renderWork } from './views/work.js';

const startingLocation = window.location.pathname;

if (startingLocation == '/') renderHome();
if (startingLocation == '/about') renderAbout();
if (startingLocation == '/experience') renderExperience();
if (startingLocation == '/work') renderWork();
if (startingLocation == '/contact') renderContact();

document.querySelector('#home').addEventListener('click', function () {
    history.pushState({ page: 'home' }, null, '/');
    renderHome();
});

document.querySelector('#about').addEventListener('click', function () {
    history.pushState({ page: 'about' }, null, 'about');
    renderAbout();
});

document.querySelector('#experience').addEventListener('click', function () {
    history.pushState({ page: 'experience' }, null, 'experience');
    renderExperience();
});

document.querySelector('#work').addEventListener('click', function () {
    history.pushState({ page: 'work' }, null, 'work');
    renderWork();
});

document.querySelector('#contact').addEventListener('click', function () {
    history.pushState({ page: 'contact' }, null, 'contact');
    renderContact();
});

// When someone uses the browser back/forward buttons
window.onpopstate = function (event) {
    if (event.state.page == 'home') renderHome();
    if (event.state.page == 'about') renderAbout();
    if (event.state.page == 'experience') renderExperience();
    if (event.state.page == 'work') renderWork();
    if (event.state.page == 'contact') renderContact();
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
});
