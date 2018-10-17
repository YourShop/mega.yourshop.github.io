/////////////////////////////Слайдер//////////////////////////////////
function getId(a) {
    return document.getElementById(a);
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}

/////////////////////////////Слайдер//////////////////////////////////
autoSlider();
var left ;
var timer;

function autoSlider() {
    timer = setTimeout(function () {
      
        left = left - 100;
        if (left < -400) {
            left = 0;
            clearTimeout(timer);
        }
        slides.style.display = "block";
        autoSlider();
    }, 2000);
}
///////////////////////////////////////////////////////////////////////
$(function () {
        $('.logo').animate({
            top: "+=40"
        }, 3000)
    })
    ////////////////////////////Меню//////////////////////
function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}
//var slides = document.querySelectorAll('#slides .slide');
//var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,2000);
//
//function nextSlide(){
//    goToSlide(currentSlide+1);
//}
//
//function previousSlide(){
//    goToSlide(currentSlide-1);
//}
//
//function goToSlide(n){
//    slides[currentSlide].className = 'slide';
//    currentSlide = (n+slides.length)%slides.length;
//    slides[currentSlide].className = 'slide showing';
//}
window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 100);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}
$(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $('#top').show()
        }
        else {
            if ($(window).scrollTop() < 800) {
                $('#top').hide()
            }
        }
    })
    ///////////////////////////Скрол Картинок
$(window).scroll(function () {
    var kylie = document.getElementsByClassName('imgKylie');
    if ($(window).scrollTop() > 200) {
        $(kylie).animate({
            top: "-20px"
            , opacity: "1"
        , }, 4000)
    }
})
$(window).scroll(function () {
    var naiser = document.getElementsByClassName('imgNaiser');
    if ($(window).scrollTop() > 900) {
        $(naiser).animate({
            top: "-20px"
            , opacity: "1"
        , }, 4000)
    }
})
$(window).scroll(function () {
    var gloves = document.getElementsByClassName('imgGloves');
    if ($(window).scrollTop() > 1900) {
        $(gloves).animate({
            top: "-20px"
            , opacity: "1"
        , }, 4000)
    }
})
$(window).scroll(function () {
    var car = document.getElementById('car');
    if ($(window).scrollTop() > 2800) {
        $(car).animate({
            marginLeft: "42%"
        }, 4000)
    }
})