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

// Smooth Scroll
$('.go-top a').on('click', function (e) {
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
