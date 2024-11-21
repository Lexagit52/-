// Функция для перехода к первому слайду
function goToStart() {
    // Скрываем все слайды
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Отображаем первый слайд
    document.getElementById('slide1').style.display = 'block';
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
