let currentSlide = 1;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index + 1 === slideNumber) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlide = currentSlide < totalSlides ? currentSlide + 1 : totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide > 1 ? currentSlide - 1 : 1;
    showSlide(currentSlide);
}

// Показать первый слайд при загрузке
showSlide(currentSlide);
// Функция для перезагрузки страницы
function reloadPage() {
    location.reload(); // Перезагружает страницу
}

// Функция для перехода на следующий слайд
function nextSlide() {
    let currentSlide = document.querySelector('.slide:not([style*="display: none"])');
    let nextSlide = currentSlide.nextElementSibling;
    
    if (nextSlide && nextSlide.classList.contains('slide')) {
        currentSlide.style.display = 'none';
        nextSlide.style.display = 'block';
    }
}

// Функция для перехода на предыдущий слайд
function prevSlide() {
    let currentSlide = document.querySelector('.slide:not([style*="display: none"])');
    let prevSlide = currentSlide.previousElementSibling;
    
    if (prevSlide && prevSlide.classList.contains('slide')) {
        currentSlide.style.display = 'none';
        prevSlide.style.display = 'block';
    }
}

// Инициализация: показываем только первый слайд при загрузке страницы
window.onload = function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none';
        }
    });
};
