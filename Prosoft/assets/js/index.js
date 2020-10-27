// OnFocus Event
const myFocus = document.querySelector('#username');

myFocus.addEventListener('focus', (e) => {
    e.preventDefault();
    document.querySelector('#username').style.border = ' 1px solid #1e90ff';
})

// OnBlur Event
const myBlur = document.querySelector('#password');

myBlur.addEventListener('blur', myBlury);

function myBlury() {
    document.querySelector('#password').style.border = ' 1px solid #1e90ff';
}

// Get Full Year
let date = new (Date);
let year = date.getFullYear();
document.querySelector('#year').innerText = year;

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

// Get Registration Form
const getReg_Form = document.querySelector('#sign-up');

getReg_Form.addEventListener('click', form);

function form() {
    document.querySelector('#reg').style.display = 'block';
    document.querySelector('#log').style.display = 'none';
}

// Get Password Recovery Form
const getPass_Form = document.querySelector('#forg-p');

getPass_Form.addEventListener('click', function () {
    document.querySelector('#forgot-p').style.display = 'block';
    document.querySelector('#log').style.display = 'none';
});

// Get Login Form while at Recovery
const getlog_Form = document.querySelector('#sign-in');

getlog_Form.addEventListener('click', (e) => {
    document.querySelector('#log').style.display = 'block';
    document.querySelector('#forgot-p').style.display = 'none';
});

// Get Login Form while at Registration
const getlog_Form_2 = document.querySelector('#sign-in_2');

getlog_Form_2.addEventListener('click', function () {
    document.querySelector('#log').style.display = 'block';
    document.querySelector('#reg').style.display = 'none';
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
