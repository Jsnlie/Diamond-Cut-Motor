document.addEventListener("DOMContentLoaded", initializeSlider);

let slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

   
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const currentPage = window.location.pathname.split('/').pop(); 

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); 
        }
    });
});

