// Get Full Year
let date = new (Date);
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// OnFocus Event
function myFocus() {
    document.getElementById('username').style.border = ' 2px solid #1e90ff';
}

// OnBlur Event
function myBlur() {
    document.getElementById('password').style.border = ' 2px solid #1e90ff';
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