/* ==================================================
# Getting the current year
===================================================*/
const today = new Date();
const year = today.getFullYear();
const currentYear = document.querySelector('#year');
currentYear.innerHTML = year;

/* ==================================================
# Smooth Scroll
===================================================*/
$('.navbar a, nav-brand, .go_top a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

/* ==================================================
# Back To Top
===================================================*/
const goTop = document.querySelector('.go_top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }
});

/* ==================================================
# Toggling navbar
===================================================*/
const navbar = document.querySelector('.navbar');
const section = document.querySelector('section');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > section.offsetHeight) {
        navbar.classList.add('toggle');
    }
     else  if (window.pageYOffset > 50 || window.pageYOffset < section.offsetHeight) {
        navbar.classList.remove('toggle');
    }
});