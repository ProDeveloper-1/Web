/* =================================================
# Form Operations
=================================================*/
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const formMsg1 = document.querySelector('.nameMsg');
const formMsg2 = document.querySelector('.emailMsg');
const formMsg3 = document.querySelector('.subjectMsg');
const formMsg4 = document.querySelector('.messageMsg');
const formMessage = document.querySelector('.successMsg');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();

    // Create new XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // Open connection
    xhr.open('POST', 'pages/emailsSender.php', true);

    // Execution of the ajax call
    // xhr.onload = function () {
    // Status codes
    // 200 = Correct
    // 403 = Forbidden
    // 404 = Not Found
    // console.log(this.status);
    // if (this.status === 200) {
    // Invoke the checkInputs function
    // checkInputs();
    //     }
    // }

    xhr.onreadystatechange = function () {
        // Ready State
        // 0 = Unsent
        // 1 = Opened
        // 2 = Received
        // 3 = Loading
        // 4 = Done
        console.log('Ready State: ', xhr.readyState);
        if (this.status === 200 && this.readyState === 4) {
            checkInputs();
        }
    }

    // Send the request
    xhr.send();
});

function checkInputs() {
    // Get the inputs values and remove any white space
    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    // Email Validator
    function isValid(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (userNameValue === '') {
        formMsg1.innerText = 'Andika jina lako kamili';
        formMsg1.classList.add('msg');
        userName.style.border = '2px solid red';
        formMsg1.style.display = 'block';
    }
    else if (userNameValue != '') {
        $('.nameMsg').slideUp();
        userName.style.border = '2px solid green';
    }
    if (userEmailValue === '') {
        formMsg2.innerText = 'Andika barua pepe yako';
        formMsg2.classList.add('msg');
        userEmail.style.border = '2px solid red';
        formMsg2.style.display = 'block';
    }
    if (userEmailValue != '') {
        formMsg2.innerText = '';
        formMsg2.classList.remove('msg');
        userEmail.style.border = '2px solid green';
        formMsg2.style.display = 'block';
        if (!isValid(userEmailValue)) {
            formMsg2.innerText = 'Barua pepe sio sahihi';
            formMsg2.classList.add('msg');
            userEmail.style.border = '2px solid red';
        }
        else if (isValid(userEmailValue)) {
            userEmail.style.border = '2px solid green';
            $('.emailMsg').slideUp();
        }
    }
    if (subjectValue === '') {
        formMsg3.innerText = 'Andika mada yako';
        formMsg3.classList.add('msg');
        subject.style.border = '2px solid red';
        formMsg3.style.display = 'block';
    } else if (subjectValue != '') {
        $('.subjectMsg').slideUp();
        subject.style.border = '2px solid green';
    }
    if (messageValue === '') {
        formMsg4.innerText = 'Acha ujumbe wako';
        formMsg4.classList.add('msg');
        message.style.border = '2px solid red';
        formMsg4.style.display = 'block';
    }
    if (messageValue != '') {
        $('.messageMsg').slideUp();
        message.style.border = '2px solid green';
    }
    if (userNameValue != '' && userEmailValue != '' && subjectValue != '' && messageValue != '' && !isValid(userEmailValue) === false) {

        // $.ajax({
        //     url: 'pages/emailsSender.php',
        //     method: 'POST',
        //     dataType: 'json',
        //     data: {
        //         userName : userNameValue,
        //         userEmail : userEmailValue,
        //         subject : subjectValue,
        //         message : messageValue
        //     },
        //     success: function (response) {
        //         // $('#form')[0].reset();
        //         formMessage.innerText = 'Ujumbe wako umetumwa, Asante kwa kuwasiliana nasi';
        //         formMessage.classList.add('success');
        //         setTimeout(() => {
        //             formMessage.style.display = 'none';
        //         }, 5000);
        //         formMessage.style.display = '';
        //     }
        // });

        formMessage.innerText = 'Ujumbe wako umetumwa, Asante kwa kuwasiliana nasi.';
        formMessage.classList.add('success');
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        formMessage.style.display = '';

        // Clear fields
        userName.value = '';
        userEmail.value = '';
        subject.value = '';
        message.value = '';
        formMsg1.value = '';
        formMsg2.value = '';
        formMsg3.value = '';
        formMsg4.value = '';
        formMessage.value = '';
        userName.style.border = '';
        userEmail.style.border = '';
        subject.style.border = '';
        message.style.border = '';
    }

}

// Move to the next input field once you press enter
$('#form').on('keydown', 'input', function (e) {
    if (e.which === 13) {
        e.preventDefault();
        const $this = $(e.target);
        const index = parseFloat($this.attr('data-index'));
        $('[data-index="' + (index + 1).toString() + '"]').focus();
    }
});

/* =================================================
# End Form Operations
=================================================*/

/* =================================================
# Navigation
=================================================*/

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

/* =================================================
# End Navigation
=================================================*/

// Get Full Year
const date = new (Date);
let year = date.getFullYear();
document.querySelector('#year').innerText = year;