const navigation = document.querySelector('.navigation-md');
const dropdowns = document.querySelectorAll('.dropdown');

const toggleNavigation = () => {
    navigation.classList.toggle('show-navigation');
    
    if (navigation.classList.contains('show-navigation')) {
        document.body.style.overflow = 'auto'; // Hide scrolling on body
    } else {
        document.body.style.overflow = 'auto'; // Enable scrolling on body
    }
};

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

