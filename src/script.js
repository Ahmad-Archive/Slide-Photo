(function () {
    const slides = document.getElementById('slides');
    const slideCount = slides.children.length;
    const prevBtn = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    let currentIndex = 0;
    let autoSlideInterval;
    const autoSlideDelay = 5000;

    function goToSlide(index) {
        if(index < 0) index = slideCount = 1;
        else if(index >=slideCount) index = 0;
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }
}

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });


    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowLeft') {
            prevBtn.focus();
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextBtn.focus();
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        }
    })

    goToSlide(0);
    startAutoSlide();
})();
