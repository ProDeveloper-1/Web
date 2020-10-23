// Get Full Year
let date = new (Date);
let year = date.getFullYear();
document.querySelector('#year').innerHTML = year;

// OnFocus Event
function myFocus() {
    document.querySelector('#username').style.border = ' 1px solid #1e90ff';
}

// OnBlur Event
function myBlur() {
    document.querySelector('#password').style.border = ' 1px solid #1e90ff';
}

// Smooth Scroll
$('.nav a, .go-top a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
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
})