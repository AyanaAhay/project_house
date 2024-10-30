(function () {
    "use strict"

    const root = document.documentElement;

    // работа с гамбургером
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
        root.classList.toggle("show-nav");
    });


    // работа с кнопками
    const mainBtnActive = document.querySelector("#js-btn");
    mainBtnActive.addEventListener('click', function(event) {
        // Изменяем цвет кнопки
        mainBtnActive.classList.toggle('active-btn');
        
        // Останавливаем событие клика, чтобы оно не всплывало
        event.stopPropagation();
    });
    
    // Слушаем клик по документу
    document.addEventListener('click', function() {
        // Убираем класс активного состояния, если кликнули вне кнопки
        if (mainBtnActive.classList.contains('active-btn')) {
            mainBtnActive.classList.remove('active-btn');
        }
    });


    // работа с каталогом
    document.getElementById('btn1').addEventListener('click', function() {
        // показываем карточки
        document.querySelector('.card-list1').style.display = 'flex';

        // скрываем карточки
        document.querySelector('.card-list2').style.display = 'none';
    })

    document.getElementById('btn2').addEventListener('click', function() {
        // показываем карточки
        document.querySelector('.card-list1').style.display = 'none';

        // скрываем карточки
        document.querySelector('.card-list2').style.display = 'flex';
    })
})();