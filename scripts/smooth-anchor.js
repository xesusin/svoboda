$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault(); // Предотвращаем стандартное действие
        let target = $(this).attr('href'); // Получаем ID цели
        let targetOffset = $(target).offset().top; // Вычисляем положение
        $('html, body').animate({
            scrollTop: targetOffset // Прокрутка до цели
        }, 400, 'swing'); // Уменьшили продолжительность до 400 миллисекунд
    });
});