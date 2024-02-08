document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        // Обробка гарячих клавіш
        switch (event.key) {
            case '1':
                // Перехід до першого заголовку
                document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                // Перехід до другого заголовку
                document.querySelectorAll('h2')[0].scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                // Перехід до третього заголовку
                document.querySelectorAll('h2')[1].scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
            
                document.getElementById('h4')[2].scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});
