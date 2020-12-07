// Toggle Menu bars

// const menu = document.querySelector('.menu-bars');
// const nav = document.querySelector('.navbar-nav');

// menu.addEventListener('click', () => {
//         nav.style.display = 'block';
// });

$(document).ready(function () {
    $('.menu-bars').on('click', function () {
        $('.navbar-nav').slideToggle(500);
    });
});

const about = document.querySelector('#kuhusu');
const section = document.querySelector('#about');

about.addEventListener('click' , section1);
function section1() {
   setTimeout(function() {section.style.paddingTop = '120px';}, 300);
   
}

// section.style.paddingTop = '60px';


