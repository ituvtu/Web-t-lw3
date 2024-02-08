// Отримуємо посилання на всі зображення галереї
const galleryImages = document.querySelectorAll('.gallery-image');

// Отримуємо елементи для відображення великого зображення
const overlay = document.getElementById('overlay');
const imageViewer = document.getElementById('imageViewer');
const largeImage = document.getElementById('largeImage');
const closeButton = document.getElementById('closeButton');

// Додаємо обробник події для кожного зображення
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        largeImage.setAttribute('src', src);
        overlay.style.display = 'block';
        imageViewer.style.display = 'block';
    });
});

// Закриття великого зображення
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    imageViewer.style.display = 'none';
});
