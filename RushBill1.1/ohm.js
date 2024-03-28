let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('Pn').onclick = function () {
    alert("My Phone number = 096 - 651 - 9965");
};

document.getElementById('Discord').onclick = function () {
    alert("My Discord = Sagame1688#1518");
};

function showSlide(n) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[n].classList.add('active');
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically transition to the next slide every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 2000);