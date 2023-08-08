const navigation = document.querySelector('.navigation-md');
const dropdowns = document.querySelectorAll('.dropdown');

const toggleNavigation = () => navigation.classList.toggle('show-navigation');

document.querySelectorAll('.btn-open, .btn-close').forEach(button => {
    button.addEventListener('click', toggleNavigation);
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => dropdown.classList.toggle('active'));
});

document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});