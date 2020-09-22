(function() {
    const prevButtonElement = document.getElementById('prev');
    const nextButtonElement = document.getElementById('next');
    const images = document.getElementById('slider_images').children; // array-like object not an array
    const sliderImagesCount = images.length;
    let currentImageIndex = 0;

    function show(element) {
        element.classList.remove('hidden');
        element.classList.add('active');
    }

    function hide(element) {
        element.classList.remove('active');
        element.classList.add('hidden');
    }

    prevButtonElement.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            hide(images[currentImageIndex]);
            currentImageIndex = currentImageIndex - 1;
            show(images[currentImageIndex]);
        }
    });

    nextButtonElement.addEventListener('click', function() {
        if (currentImageIndex < sliderImagesCount - 1) {
            hide(images[currentImageIndex]);
            currentImageIndex = currentImageIndex + 1;
            show(images[currentImageIndex]);
        }
    });

    console.log({
        prevButtonElement,
        nextButtonElement,
    });
})();


