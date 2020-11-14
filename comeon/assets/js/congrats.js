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