// == Navigation Menu == //

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link-item');

    burger.addEventListener('click', function () {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                // console.log(index / 7);
                // console.log(index / 5 + 0.2);
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

// --- End Navigation Menu --- //

// == Form Validation == //

const formSubmit = document.querySelector('#btn');

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const userName = document.querySelector('#username');
    const userEmail = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userPass = document.querySelector('#password');
    const userPass2 = document.querySelector('#password2');

    if (userName.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Please fill in the username';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else if (userEmail.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Please fill in the email';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else if (userPass.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Password is required';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else if (userPass2.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Confirm the password';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else if (userPass2.value != userPass.value) {
        msg.style.display = 'block';
        msg.innerHTML = 'Password mismatched';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else {
        // Redirect to
        window.location = "pages/congrats.html";

        // clear fields
        userName.value = '';
        userEmail.value = '';
        userPass.value = '';
        userPass2.value = '';
    }

});

// == Back To Top == //

const Top = document.querySelector('.go_top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        Top.classList.add('active');
    }
    else {
        Top.classList.remove('active');
    }

});

// --- End Back To Top --- //

