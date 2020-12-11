// Toggle Menu bars
$(document).ready(function () {
    $('.menu-bars').on('click', function () {
        $('.navbar-nav').slideToggle(500);
    });
});

// SlideUp Menu when navLink clicked
// $(document).ready(function () {
//     $('.nav-link').on('click', function () {
//         $('.navbar-nav').slideUp(500);
//     });
// });

// When kuhusu navLink clicked then paddingTop 120px about section
const about = document.querySelector('#kuhusu');
const section = document.querySelector('#about');

about.addEventListener('click' , section1);
function section1() {
   setTimeout(function() {section.style.paddingTop = '120px';}, 300);
   
}

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



