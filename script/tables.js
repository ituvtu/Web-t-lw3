document.addEventListener("DOMContentLoaded", function() {
    const tableRows = document.querySelectorAll('.table tr'); // Вибираємо всі рядки таблиці

    tableRows.forEach((row, index) => {
        // Додаємо обробники подій "mouseenter" та "mouseleave" для кожного рядка
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#008000'; // Змінюємо фоновий колір при наведенні
        });

        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; // Знімаємо змінений фоновий колір при відведенні миші
        });
    });
});