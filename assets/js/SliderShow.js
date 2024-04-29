

let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides(n) {
showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex1 = 1}
if (n < 1) {slideIndex1 = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex1-1].style.display = "block";
dots[slideIndex1-1].className += " active";
} 





let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 3000); // Change image every 2 seconds
} 
