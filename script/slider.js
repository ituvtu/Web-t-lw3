document.addEventListener('DOMContentLoaded', function () {
    let slider = document.querySelector('.slider');
    let i = 1;
    for (let li of slider.querySelectorAll('li')) {
      li.style.position = 'relative';

      i++;
    }
  
    /* конфігурація */
    let width = 200; // ширина картинки
    let count = 2; // видима кількість зображень
    let list = slider.querySelector('ul');
    let listElems = slider.querySelectorAll('li');
    let position = 0; // положення ленти прокрутки
  
    slider.querySelector('.prev').onclick = function () {
      if (position >= 0) {
        // Блокуємо подальший рух вліво, оскільки ми на першому слайді
        return;
      }
      // рух вліво
      position += width * count;
      if (position > 0) {
        // перехід в кінець, якщо ми на першому слайді
        position = -width * (listElems.length - count);
      }
      list.style.marginLeft = position + 'px';
    };
  
    slider.querySelector('.next').onclick = function () {
      // рух вправо
      position -= 1+(width * count);
      if (position < -width * (listElems.length - count)) {
        // перехід на початок, якщо ми на останньому слайді
        position = 0;
      }
      list.style.marginLeft = position + 'px';
    };
  });
  