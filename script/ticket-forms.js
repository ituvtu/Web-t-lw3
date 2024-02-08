document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".form");
  const quantityInput = document.getElementById("quantity");
  const dateInput = document.getElementById("visit-date");
  const timeInput = document.getElementById("visit-time");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      // Виконувати операції з даними форми, наприклад, відправляти їх на сервер.
      alert("Форма валідна. Дані відправлені на сервер.");
    }
  });

  function validateForm() {
    let valid = true;

    // Валідація кількості квитків
    if (quantityInput.value < 1) {
      alert("Виберіть щонайменше 1 квиток.");
      valid = false;
    }

    // Валідація дати
    const today = new Date();
    const selectedDate = new Date(dateInput.value);
    if (selectedDate <= today) {
      alert("Будь ласка, виберіть майбутню дату.");
      valid = false;
    }

    // Валідація імені
    if (nameInput.value.trim() === "") {
      alert("Будь ласка, введіть ваше ім'я.");
      valid = false;
    }

    // Валідація адреси електронної пошти
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Введіть коректну адресу електронної пошти.");
      valid = false;
    }

    return valid;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.form'); // Вибираємо форму
  const formHeading = document.getElementById('form-heading'); // Вибираємо заголовок

  const toggleForm = () => {
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
  };

  // Приховування форми при завантаженні сторінки
  form.style.display = 'none';

  // Додавання обробника події для заголовку
  formHeading.addEventListener('click', toggleForm);
});



