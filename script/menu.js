window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY > 0) {
        menu.style.position = 'fixed';
        menu.style.top = '0';
        menu.style.width = '95%'; // Зробимо меню на весь екран
        menu.style.backgroundColor = 'green'; // Змінимо фон меню, якщо потрібно
        menu.style.zIndex = '100'; // Встановимо високий z-index, щоб меню було поверх інших елементів
    } else {
        menu.style.position = 'static';
        menu.style.backgroundColor = ''; // Скидаємо фон меню, якщо користувач вернувся вгору
    }
});
