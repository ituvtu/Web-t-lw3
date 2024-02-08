// Глобальна змінна для інтервалу лічильника
let countdownInterval;

// Функція для оновлення значень лічильників
function updateCountdown() {
    const currentTime = new Date();
    const newYear = new Date(currentTime.getFullYear() + 1, 0, 1); // Новий рік наступного року (січень 1)
    const timeLeft = newYear - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Оновлення значень на сторінці
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Запуск лічильника при завантаженні сторінки
countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Виклик функції для ініціалізації лічильників при завантаженні сторінки
