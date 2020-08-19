//Image slider
let i = 0; //start point
let images = [];
let time = 5000;

//Image list
images[0] = 'assets/img/tz32.jpg';
images[1] = 'assets/img/tz14.jpg';
images[2] = 'assets/img/tz35.jpeg';

// Change Image
function changeImage() {
    document.slide.src = images[i];
    if(i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImage()", time);
}
window.onload = changeImage;
