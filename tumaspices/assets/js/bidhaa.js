// Toggle Menu bars
$(document).ready(function () {
    $('.menu-bars').on('click', function () {
        $('.navbar-nav').slideToggle(500);
    });
});

// SlideUp Menu when navLink clicked on mobile version
$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.nav-link').on('click', function () {
            $('.navbar-nav').slideUp(500);
        });
    }
    else if ($(window).width() > 768) {
        // $('.navbar-nav').css('display', 'inline-flex');
    }
});

// When kuhusu navLink clicked then paddingTop 120px the about section
const about = document.querySelector('#kuhusu');
const sectional = document.querySelector('#about');

about.addEventListener('click', section);
function section() {
    sectional.style.paddingTop = '100px';
}

// When bidhaa navLink clicked then paddingTop 120px the bidhaa section
const products = document.querySelector('#products');
const bidhaa = document.querySelector('#bidhaa');

products.addEventListener('click', product);
function product() {
    bidhaa.style.paddingTop = '100px';
}

// When wasiliana nasi navLink clicked then paddingTop 120px the contact section
const wasiliana = document.querySelector('#wasiliana');
const contact = document.querySelector('#contact');

wasiliana.addEventListener('click', contacts);
function contacts() {
    contact.style.paddingTop = '100px';
}

// Smooth Scroll
$('.nav a, .go-top a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 100);
    }
});

// Back To Top
const toTop = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }
});

// Get Full Year
const date = new (Date);
let year = date.getFullYear();
document.querySelector('#year').innerText = year;
